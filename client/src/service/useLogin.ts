import { useCallback } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/hooks/useAuth";

export const useLogin = () => {
	const { setUser } = useAuth();
	const provider = new GoogleAuthProvider();

	const login = useCallback(async () => {
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
	}, []);

	return { login };
};
