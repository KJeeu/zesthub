import { db, app } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import type { CategoryData, FoodCartData } from "@/types/api.types";

export const getCategory = async () => {
	const response = await getDocs(collection(db, "category"));
	const data = response.docs.map((category) => ({ ...category.data() }));
	return data.map((category) => ({
		title: category.title,
		storage: category.storage,
	}));
};

export const getFoodCart = async (
	place: string,
	category: CategoryData | null,
) => {
	const response = category
		? await getDocs(
				query(
					collection(db, "cart"),
					where("place", "==", place),
					where("category", "==", category?.title),
				),
			)
		: await getDocs(query(collection(db, "cart"), where("place", "==", place)));

	const data = response.docs.map((foodCart) => {
		const data = foodCart.data();
		const foodCartData: FoodCartData = {
			buyData: data["buyData"],
			category: data["category"],
			count: data["count"],
			expiryDate: data["expiryDate"],
			id: foodCart.id,
			image: data["image"],
			name: data["name"],
			place: data["place"],
		};
		return foodCartData;
	});

	return data;
};

export const getFoodImage = async (image: string) => {
	const storage = getStorage(app);
	const imageRef = ref(storage, `cart/${image}`);
	return await getDownloadURL(imageRef);
};
