import styled from "styled-components";
import Image from "../Image";
import { useNavigate } from "react-router-dom";
import { FONT_SIZE } from "@/styles/common";
import type { RecipeListData } from "@/types/api.types";

interface SearchResultBoxProps {
	recipe: RecipeListData;
}

const SearchResultBox = ({ recipe }: SearchResultBoxProps) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(`/recipe/detail/${recipe.menuName}`);
	};

	return (
		<ResultBox onClick={onClick}>
			<SearchResultBoxInfoCard>
				<Image
					menu={recipe.menuName}
					menuImage={recipe.menuImage}
					width="198px"
					height="150px"
				/>
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

const Menu = styled.span`
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
