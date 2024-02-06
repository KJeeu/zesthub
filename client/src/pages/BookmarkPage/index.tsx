import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FONT_SIZE } from "@/styles/common";
import { useLoginUser } from "@/store";
import { getBookmark } from "@/api/bookmark";
import BookmarkBox from "@/components/BookmarkBox";

const BookmarkPage = () => {
	const { loginUser } = useLoginUser();

	const { data: BookmarkList } = useQuery({
		queryKey: ["bookmark", loginUser],
		queryFn: () => {
			return getBookmark(loginUser!);
		},
	});

	const menus = BookmarkList?.map((x) => x.menu);

	return (
		<Container>
			<Banner>
				<StyledLink to="/main">
					<Title>&lt; &nbsp; 찜한 목록</Title>
				</StyledLink>
			</Banner>
			<ResultSection>
				{!BookmarkList && <ResultCount>찜한 목록이 없습니다.</ResultCount>}
				{BookmarkList && (
					<>
						<ResultCount>{BookmarkList.length}개의 레시피</ResultCount>
						{menus?.map((menu) => <BookmarkBox menu={menu} />)}
					</>
				)}
			</ResultSection>
		</Container>
	);
};

export default BookmarkPage;

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
