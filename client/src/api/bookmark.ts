import { db } from "@/firebase";
import {
	collection,
	addDoc,
	getDocs,
	query,
	where,
	doc,
	deleteDoc,
} from "firebase/firestore";

import type { RecipeListData, BookmarkBoxProps } from "@/types/api.types";

export const createBookmark = async (user: string, recipe: RecipeListData) => {
	addDoc(collection(db, "bookmark"), {
		user: user,
		menu: recipe.menuName,
		count: recipe.ingredients.name.length,
		ingredients: recipe.ingredients.name.join(", "),
		image: recipe.menuImage,
	});
};

export const getBookmark = async (user: string) => {
	const response = await getDocs(
		query(collection(db, "bookmark"), where("user", "==", user)),
	);

	const bookmark: BookmarkBoxProps[] = response.docs.map((bookmark) => {
		const data = bookmark.data();
		return {
			user: data.user,
			menu: data.menu,
			count: data.count,
			ingredients: data.ingredients,
			image: data.image,
		};
	});

	return bookmark;
};

export const getBookmarkid = async (user: string, menu: string) => {
	const response = await getDocs(
		query(
			collection(db, "bookmark"),
			where("user", "==", user),
			where("menu", "==", menu),
		),
	);

	const data = response.docs.map((bookmark) => {
		return bookmark.id;
	});

	return data[0];
};

export const deleteBookmark = async (user: string, menu: string) => {
	const id = await getBookmarkid(user, menu);
	await deleteDoc(doc(db, "bookmark", id));
};
