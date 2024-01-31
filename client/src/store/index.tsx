import { create } from "zustand";
import type { CategoryData, RecipeListData } from "@/types/api.types";

interface UseChangeRefriStoreTyper {
	isChange: boolean;
	change: () => void;
}

export const useChangeRefriStore = create<UseChangeRefriStoreTyper>((set) => ({
	isChange: false,
	change: () =>
		set((prev) => ({
			isChange: !prev.isChange,
		})),
}));

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

interface UserSelectRecipeStoreType {
	selectedRecipe: RecipeListData;
	userSelectRecipe: (recipe: RecipeListData) => void;
}

export const useUserSelectRecipeStore = create<UserSelectRecipeStoreType>(
	(set) => ({
		selectedRecipe: {
			id: "",
			menuName: "",
			menuImage: "",
			ingredients: {
				name: [],
				detail: [],
			},
			recipeInfo: [],
			menuTip: [],
		},
		userSelectRecipe: (recipe) => set({ selectedRecipe: recipe }),
	}),
);
