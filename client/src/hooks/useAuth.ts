import { useContext } from "react";
import { AuthContext } from "@/store/AuthContext";

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("Not Found");
	}

	return context;
};
