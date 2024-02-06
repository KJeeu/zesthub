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

export const createBookmark = async (user: string, menu: string) => {
	addDoc(collection(db, "bookmark"), {
		user: user,
		menu: menu,
	});
};

export const getBookmark = async (user: string) => {
	const response = await getDocs(
		query(collection(db, "bookmark"), where("user", "==", user)),
	);

	const data = response.docs.map((bookmark) => {
		return bookmark.data();
	});

	return data;
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
