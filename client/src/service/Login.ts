import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { User } from "@/store/AuthContext";

export const login = async (setUser: (user: User | null) => void) => {
	const provider = new GoogleAuthProvider();

	try {
		const data = await signInWithPopup(auth, provider);
		const { displayName, email } = data.user;
		setUser({
			name: displayName,
			email: email,
		});
	} catch (error) {
		console.log("error: ", error);
	}
};
