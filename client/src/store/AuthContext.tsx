import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "@/firebase";

interface AuthContextProviderProps {
	children: ReactNode | ReactNode[];
}

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

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [user, setUser] = useState<User | null>(null);

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

	useEffect(() => {
		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
