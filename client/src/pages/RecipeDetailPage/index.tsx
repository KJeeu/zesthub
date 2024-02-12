import { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { FONT_SIZE } from "@/styles/common";
import Image from "@/components/Image";
import RecipeInfo from "@/components/RecipeInfo";
import { useParams } from "react-router-dom";
import TextButton from "@/components/TextButton";
import { useLoginUser } from "@/store";
import { createBookmark, deleteBookmark, getBookmark } from "@/api/bookmark";
import { getRecipe } from "@/api/recipe";

const RecipeDetailPage = () => {
	const { menu } = useParams();
	const { loginUser } = useLoginUser();
	const [isBookmark, setIsBookmark] = useState(false);

	const { data: Recipe } = useQuery({
		queryKey: ["bookmark", menu],
		queryFn: async () => {
			const recipe = await getRecipe(menu!); // Page parameter라서 없을 수가 없음
			if (recipe) {
				return recipe[0];
			}
		},
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const { data: BookmarkList } = useQuery({
		queryKey: ["bookmark", loginUser],
		queryFn: async () => {
			return await getBookmark(loginUser!);
		},
	});

	useEffect(() => {
		if (BookmarkList) {
			const menus = BookmarkList?.map((x) => x.menu).includes(menu!);
			setIsBookmark(menus);
		}
	}, [BookmarkList]);

	const handleBookMark = () => {
		if (isBookmark) {
			deleteBookmark(loginUser!, menu!);
			alert("삭제되었습니다.");
			setIsBookmark(false);
		} else {
			createBookmark(loginUser!, Recipe!);
			alert("추가되었습니다.");
			setIsBookmark(true);
		}
	};

	return (
		<Wrapper>
			<Title>{menu}</Title>
			{!Recipe && <Container>레시피 불러오는 중..</Container>}
			{Recipe && (
				<Container>
					<Section>
						<Image
							menu={Recipe.menuName}
							menuImage={Recipe.menuImage}
							width="500px"
							height="450px"
						/>
						<TextButton
							text={isBookmark ? "찜 삭제" : "찜 하기"}
							colorType="dark"
							type="button"
							onClick={handleBookMark}
						/>
					</Section>
					<DetailInfo>
						<RecipeInfo recipe={Recipe} />
					</DetailInfo>
				</Container>
			)}
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
