import styled from "styled-components";

const RecipeIngredients = ({
	ingredientsDetail,
}: {
	ingredientsDetail: string[];
}) => {
	return (
		<InfoContainer>
			<IngredientsTitle>
				<SubTitle>재료</SubTitle>
				<Count>{ingredientsDetail.length}개 재료 필요</Count>
			</IngredientsTitle>
			<Info>
				{ingredientsDetail.map((item, index) => (
					<span key={index}>{item}</span>
				))}
			</Info>
		</InfoContainer>
	);
};

export default RecipeIngredients;

const InfoContainer = styled.div`
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid var(--primary-1);
`;

const SubTitle = styled.h5`
	font-weight: bold;
	color: var(--primary-4);
	margin-bottom: 1rem;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const IngredientsTitle = styled.section`
	display: flex;
	justify-content: space-between;
`;

const Count = styled.span`
	color: gray;
`;
