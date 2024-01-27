import styled from "styled-components";
import { FONT_SIZE } from "@/styles/common";
import Image from "@/components/Image";
import RecipeInfo from "@/components/RecipeInfo";
import { useUserSelectRecipeStore } from "@/store";

const RecipeDetailPage = () => {
	const { selectedRecipe } = useUserSelectRecipeStore();
	const { menuName, menuImage } = selectedRecipe;

	return (
		<Wrapper>
			<Title>{menuName}</Title>
			<Container>
				<Image
					menu={menuName}
					menuImage={menuImage}
					width="500px"
					height="450px"
				/>
				<DetailInfo>
					<RecipeInfo recipe={selectedRecipe} />
				</DetailInfo>
			</Container>
		</Wrapper>
	);
};

export default RecipeDetailPage;

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;

	max-width: 1240px;
	margin: 0 auto;
`;

const Title = styled.h3`
	font-weight: bold;
	padding: 1.2rem 0px;
`;

const Container = styled.section`
	display: flex;
	font-size: ${FONT_SIZE.sm};
`;

const DetailInfo = styled.section`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding-left: 2rem;
`;
