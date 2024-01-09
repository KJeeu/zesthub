import { create } from "zustand";
import type { CategoryData } from "@/types/api.types";

interface UserCategoryStoreTyper {
	category: CategoryData | null;
	updateCategory: (category: CategoryData) => void;
}

export const useUserCategoryStore = create<UserCategoryStoreTyper>((set) => ({
	category: null,
	updateCategory: (userCategory) => set({ category: userCategory }),
}));
