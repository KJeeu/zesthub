import styled from "styled-components";
import FilterFoodSelect from "@/components/FilterFoodSelect";
import Refrigerator from "@/components/Refrigerator";

const MainPage = () => {
	return (
		<Container>
			<LeftWrapper>
				<FilterFoodSelect />
				<Refrigerator />
			</LeftWrapper>
			<RightWrapper></RightWrapper>
		</Container>
	);
};

export default MainPage;

const Container = styled.section`
	display: flex;
	height: calc(100% - 80px);
`;

const LeftWrapper = styled.section`
	width: 50%;
	padding: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RightWrapper = styled.section`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
