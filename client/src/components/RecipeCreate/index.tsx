import styled from "styled-components";
import IconButton from "../IconButton";
import FoodSelectList from "./FoodSelectList";

import { useFoodSelectList } from "@/hooks/useFoodSelectList";
import { useUserFoodSelectStore } from "@/store";

const RecipeCreate = () => {
	const { closeFoodInfo } = useUserFoodSelectStore();
	const { isOpen, openFoodSelectList, closeFoodSelectList } =
		useFoodSelectList();

	const handleRecipeCreate = () => {
		closeFoodInfo();
		openFoodSelectList();
	};

	return (
		<Wrapper>
			{!isOpen && (
				<Container>
					<IconButton
						type="recipeCreate"
						onClick={handleRecipeCreate}
						padding="1.2rem"
					/>
				</Container>
			)}
			<FoodSelectList isOpen={isOpen} close={closeFoodSelectList} />
		</Wrapper>
	);
};

export default RecipeCreate;

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Container = styled.section`
	width: 80%;
`;
