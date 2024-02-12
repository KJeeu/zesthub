import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { FONT_SIZE } from "@/styles/common";
import { getRecipeList } from "@/api/recipe";
import SearchResultBox from "@/components/SearchResultBox";

const RecipeSearchPage = () => {
	const { foodCart } = useParams();

	const { data: RecipeList, isLoading } = useQuery({
		queryKey: ["recipe", foodCart],
		queryFn: () => {
			return getRecipeList(foodCart!); // Page parameter라서 없을 수가 없음
		},
		staleTime: Infinity,
		gcTime: Infinity,
	});

	return (
		<Container>
			<Banner>
				<StyledLink to="/main">
					<Title>&lt; &nbsp; 레시피 찾기</Title>
				</StyledLink>
				<SubTitle>재료 : {foodCart}</SubTitle>
			</Banner>
			<ResultSection>
				{isLoading && <ResultCount>레시피 찾는 중</ResultCount>}
				{!isLoading && !RecipeList && (
					<ResultCount>해당하는 레시피가 없습니다.</ResultCount>
				)}
				{RecipeList && (
					<>
						<ResultCount>{RecipeList.length}개의 레시피</ResultCount>
						{RecipeList?.map((recipe) => <SearchResultBox recipe={recipe} />)}
					</>
				)}
			</ResultSection>
		</Container>
	);
};

export default RecipeSearchPage;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	width: 100%;
	max-width: 1240px;
	min-height: 100vh;

	margin: 0 auto;
`;

const ResultCount = styled.span`
	font-size: ${FONT_SIZE.md};
`;

const Banner = styled.div`
	position: relative;
	background-color: var(--primary-5);
	width: 100%;
	height: 200px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const ResultSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	width: 100%;

	padding: 0 1.2rem;
`;

const Title = styled.h5`
	margin: 1.6rem 1.2rem;
	font-weight: bold;

	color: white;
`;

const SubTitle = styled.span`
	margin: 1.6rem 1.2rem;
	font-size: ${FONT_SIZE.md};

	color: white;
`;
