export interface CategoryData {
	title: string;
	storage: string;
}

export interface FoodCartData {
	buyData: string;
	category: string;
	count: string;
	expiryDate: string;
	id: string;
	image: string;
	name: string;
	place: string;
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
