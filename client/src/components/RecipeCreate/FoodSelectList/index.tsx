import styled from "styled-components";
import IconButton from "@/components/IconButton";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import { useUserFoodCartStore, useUserFoodSelectStore } from "@/store";
import { randomColor } from "@/constants/randomColor";

type FoodSelectListProps = {
	isOpen: boolean;
	close: () => void;
};

const FoodSelectList = ({ isOpen, close }: FoodSelectListProps) => {
	const { foodCart, foodCartReset, deleteFoodCart } = useUserFoodCartStore();
	const { openFoodInfo } = useUserFoodSelectStore();

	const handleClose = () => {
		foodCartReset();
		openFoodInfo();
		close();
	};

	const handleSearch = () => {
		//TODO: 레시피 검색 페이지 이동
	};

	return (
		<>
			{isOpen && (
				<Wrapper>
					<Title>냉장고에서 재료를 선택해주세요</Title>
					<SelectList>
						{foodCart.map((food, i) => {
							return (
								<Food color={randomColor[i % randomColor.length]}>
									{food}
									<FoodDeleteButton
										onClick={() => deleteFoodCart(food)}
										color={randomColor[i % randomColor.length]}
									>
										x
									</FoodDeleteButton>
								</Food>
							);
						})}
					</SelectList>
					<ButtonBox>
						<IconButton
							type="close"
							onClick={handleClose}
							size="${FONT_SIZE.xs}"
							padding="1.5rem"
						/>
						<IconButton
							type="search"
							onClick={handleSearch}
							size="${FONT_SIZE.xs}"
							padding="1.5rem"
						/>
					</ButtonBox>
				</Wrapper>
			)}
		</>
	);
};

export default FoodSelectList;

const Wrapper = styled.section`
	width: 100%;
	height: 100%;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: ${FONT_SIZE.md};
`;

const SelectList = styled.section`
	height: 100px;
	background-color: var(--gray-1);
	border-radius: ${BORDER_RADIUS.lg};
	margin: 10px 0;
	overflow-y: auto;
`;

const ButtonBox = styled.section`
	display: flex;
	margin-left: auto;
	width: 180px;
	height: 20px;
	button {
		margin-left: 10px;
	}
`;

const Food = styled.span`
	display: inline-block;
	background-color: ${(props) => props.color};
	padding: 5px;
	margin: 10px 0 0 10px;
	border-radius: ${BORDER_RADIUS.sm};
	font-size: ${FONT_SIZE.sm};
`;

const FoodDeleteButton = styled.button`
	border: none;
	background-color: ${(props) => props.color};
`;
