import styled from "styled-components";
import { FONT_SIZE } from "@/styles/common";
import Image from "@/components/Image";
import RecipeInfo from "@/components/RecipeInfo";
import { useUserSelectRecipeStore } from "@/store";
import TextButton from "@/components/TextButton";
import { useLoginUser } from "@/store";
import { createBookmark } from "@/api/bookmark";

const RecipeDetailPage = () => {
	const { selectedRecipe } = useUserSelectRecipeStore();
	const { loginUser } = useLoginUser();
	const { menuName, menuImage } = selectedRecipe;

	const handleBookMark = () => {
		createBookmark(loginUser!, menuName);
		alert("추가되었습니다.");
	};

	return (
		<Wrapper>
			<Title>{menuName}</Title>
			<Container>
				<Section>
					<Image
						menu={menuName}
						menuImage={menuImage}
						width="500px"
						height="450px"
					/>
					<TextButton
						text="찜하기"
						colorType="dark"
						type="button"
						onClick={handleBookMark}
					/>
				</Section>
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

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;
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
