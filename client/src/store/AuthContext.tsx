import { createContext, useEffect, useState } from "react";
import { auth } from "@/firebase";

import type { contextProps } from "@/types/context.type";

export interface User {
	name: string | null;
	email: string | null;
}

export interface AuthContextType {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

export const AuthContextProvider = ({ children }: contextProps) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser({
					name: authUser.displayName,
					email: authUser.email,
				});
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
