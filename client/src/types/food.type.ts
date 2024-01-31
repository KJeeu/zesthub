import type { FoodCartData } from "./api.types";

export interface FoodInfoData {
	update: (item: FoodCartData, file?: File) => void;
	item: FoodCartData;
}

export interface FoodInfoImageData extends FoodInfoData {
	imageUrl: string;
}
