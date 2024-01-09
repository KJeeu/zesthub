import styled from "styled-components";
import { BORDER_RADIUS } from "@/styles/common";

import FoodList from "./FoodList";

const Refrigerator = () => {
	return (
		<Wrapper>
			<Container>
				<FoodList type="냉동" />
			</Container>
			<Bar />
			<Container>
				<FoodList type="냉장" />
			</Container>
		</Wrapper>
	);
};

export default Refrigerator;

const Wrapper = styled.section`
	width: 100%;
	height: 100%;

	border-radius: ${BORDER_RADIUS.lg};
	padding: 10px;
	background-color: #f5f5f7;
`;

const Container = styled.section`
	width: 100%;
	height: calc(50% - 10px);
	overflow: auto;
	scroll-snap-type: x mandatory;
`;

const Bar = styled.div`
	height: 1px;
	margin: 10px;
	background-color: #d2d2d7;
`;
