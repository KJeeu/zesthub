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

interface UserFoodSelectStoreTyper {
	isFoodOpenInfo: boolean;
	closeFoodInfo: () => void;
	openFoodInfo: () => void;
}

export const useUserFoodSelectStore = create<UserFoodSelectStoreTyper>(
	(set) => ({
		isFoodOpenInfo: true,
		closeFoodInfo: () => set({ isFoodOpenInfo: false }),
		openFoodInfo: () => set({ isFoodOpenInfo: true }),
	}),
);

interface UserFoodCartStoreTyper {
	foodCart: string[];
	addFoodCart: (food: string) => void;
	deleteFoodCart: (food: string) => void;
	foodCartReset: () => void;
}

export const useUserFoodCartStore = create<UserFoodCartStoreTyper>((set) => ({
	foodCart: [],
	addFoodCart: (food) =>
		set((prev) => {
			if (!prev.foodCart.includes(food)) {
				return { foodCart: [...prev.foodCart, food] };
			}
			return prev;
		}),
	deleteFoodCart: (food) =>
		set((prev) => ({
			foodCart: [...prev.foodCart.filter((prevFood) => prevFood !== food)],
		})),
	foodCartReset: () => set({ foodCart: [] }),
}));
