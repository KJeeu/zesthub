export interface CategoryData {
	title: string;
	storage: string;
}

export interface FoodCartData {
	buyDate: string;
	category: string;
	count: string;
	expiryDate: string;
	id: string;
	image: string;
	name: string;
	place: string;
	user: string;
}

export interface RecipeListData {
	id: string;
	menuName: string;
	menuImage: string;
	ingredients: {
		name: string[];
		detail: string[];
	};
	recipeInfo: string[];
	menuTip: string[];
}
