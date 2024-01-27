import axios from "axios";
import recipeFilter from "@/utils/RecipeFilter";

export const getRecipe = async (food: string) => {
	const KEY = import.meta.env.VITE_API_RECIPE_KEY;

	try {
		const response = await axios.get(
			`https://openapi.foodsafetykorea.go.kr/api/${KEY}/COOKRCP01/json/1/30/RCP_PARTS_DTLS=${food}`,
		);

		if (response.data.COOKRCP01.total_count === "0") {
			return false;
		}

		const recipeDataList = response.data.COOKRCP01.row;
		return recipeFilter(recipeDataList);
	} catch (error) {
		console.log(error);
	}
};

export default getRecipe;
