import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export const createBookmark = async (user: string, menu: string) => {
	addDoc(collection(db, "bookmark"), {
		user: user,
		menu: menu,
	});
};
