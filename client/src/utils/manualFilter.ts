import type { RecipeData } from "@/types/recipe.types";

const manualFilter = (recipe: RecipeData) => {
	const manuals = [];

	for (let i = 1; i <= 20; i++) {
		const manualNumber = `MANUAL${i.toString().padStart(2, "0")}`;

		const manual = recipe[manualNumber];

		if (manual === "") {
			break;
		}

		manuals.push(manual);
	}

	return manuals;
};

export default manualFilter;
