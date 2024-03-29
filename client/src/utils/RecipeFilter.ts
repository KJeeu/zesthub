import { RecipeListData } from "@/types/api.types";
import ingredientsFiler from "./ingredientsFilter";
import manualFilter from "./manualFilter";

import type { RecipeData } from "@/types/recipe.types";

const recipeFilter = (recipeDataList: RecipeData[]) => {
	try {
		const recipeList = recipeDataList.map<RecipeListData>((recipe) => ({
			id: recipe.RCP_SEQ,
			menuName: recipe.RCP_NM,
			menuImage: recipe.ATT_FILE_NO_MK,
			ingredients: ingredientsFiler(recipe.RCP_PARTS_DTLS),
			recipeInfo: manualFilter(recipe),
			menuTip: recipe.RCP_NA_TIP.split(". "),
		}));
		return recipeList;
	} catch (error) {
		console.log(error);
	}
};

export default recipeFilter;
