import { db, app } from "@/firebase";
import {
	collection,
	getDocs,
	query,
	where,
	deleteDoc,
	doc,
	updateDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject, uploadBytes } from "firebase/storage";

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
			buyDate: data["buyDate"],
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

export const getFoodImage = (image: string) => {
	return `https://firebasestorage.googleapis.com/v0/b/my-refrigerator-8ce31.appspot.com/o/cart%2F${image}?alt=media`;
};

export const deleteFood = async (id: string) => {
	deleteDoc(doc(db, "cart", id));
};

export const deleteFoodImage = async (imageName: string) => {
	const storage = getStorage(app);
	deleteObject(ref(storage, `cart/${imageName}`));
};

export const uploadImage = async (currentImage: File) => {
	const name = currentImage.name;
	const storage = getStorage(app);
	const image = ref(storage, `cart/${name}`);
	await uploadBytes(image, currentImage);
};

export const updateFood = async (item: FoodCartData) => {
	await updateDoc(doc(db, "cart", item.id), {
		category: item.category,
		name: item.name,
		buyDate: item.buyDate,
		expiryDate: item.expiryDate,
		count: item.count,
		place: item.place,
		image: item.image,
	});
};
