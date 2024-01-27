import styled from "styled-components";

interface RecipeTipProps {
	title: string;
	content: string[];
}

const RecipeInfoBox = ({ title, content }: RecipeTipProps) => {
	return (
		<InfoContainer>
			<SubTitle>{title}</SubTitle>
			<Info>
				{content.map((item, index) => (
					<span key={index}>{item}</span>
				))}
			</Info>
		</InfoContainer>
	);
};

export default RecipeInfoBox;

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
