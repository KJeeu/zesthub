import RecipeInfoBox from "./RecipeInfoBox";
import RecipeIngredients from "./RecipeIngredients";
import type { RecipeListData } from "@/types/api.types";

interface RecipeInfoProps {
	recipe: RecipeListData;
}

const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
	const { ingredients, recipeInfo, menuTip } = recipe;
	const ingredientsDetail = ingredients.detail;

	return (
		<>
			<RecipeInfoBox title={"한 줄 소개"} content={menuTip} />
			<RecipeIngredients ingredientsDetail={ingredientsDetail} />
			<RecipeInfoBox title={"레시피"} content={recipeInfo} />
		</>
	);
};

export default RecipeInfo;
