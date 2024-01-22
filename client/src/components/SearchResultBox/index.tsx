import styled from "styled-components";
import type { RecipeListData } from "@/types/api.types";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";

interface SearchResultBoxProps {
	recipe: RecipeListData;
}

const SearchResultBox = ({ recipe }: SearchResultBoxProps) => {
	return (
		<ResultBox>
			<SearchResultBoxInfoCard>
				<ImageSction>
					<Image src={recipe.menuImage} alt="recipe" />
				</ImageSction>
				<InfoSection>
					<InfoTopSection>
						<Menu>{recipe.menuName}</Menu>
					</InfoTopSection>
					<IngredientsCount>
						{recipe.ingredients.name.length}개 재료
					</IngredientsCount>
					<Ingredients>{recipe.ingredients.name.join(", ")}</Ingredients>
				</InfoSection>
			</SearchResultBoxInfoCard>
		</ResultBox>
	);
};

export default SearchResultBox;

const ResultBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

const SearchResultBoxInfoCard = styled.li`
	display: flex;
	cursor: pointer;
`;

const ImageSction = styled.section`
	position: relative;
	overflow: hidden;

	width: 198px;
	min-width: 150px;

	height: 150px;

	border-radius: ${BORDER_RADIUS.md};

	scroll-snap-align: start;
	scroll-snap-stop: always;
`;

const Image = styled.img`
	position: absolute;
	inset: 0;

	object-fit: cover;

	width: 100%;
	height: 100%;
`;

const InfoSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	position: relative;

	width: 100%;

	padding: 0.8rem;
`;

const InfoTopSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Menu = styled.h5`
	font-size: ${FONT_SIZE.md};
	line-height: 20px;
	font-weight: bold;
`;

const IngredientsCount = styled.span`
	display: flex;
	justify-content: space-between;

	color: var(--gray-3);
	font-size: ${FONT_SIZE.sm};
`;

const Ingredients = styled.span`
	width: calc(100% - 28px);

	color: var(--gray-5);
	font-size: ${FONT_SIZE.sm};
	line-height: 20px;
`;
