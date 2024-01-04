import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { User } from "@/store/AuthContext";

export const Logout = async (setUser: (user: User | null) => void) => {
	try {
		await signOut(auth);
		setUser(null);
	} catch (error) {
		console.log("error: ", error);
	}
};
