import { useState } from "react";
import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import { getFoodImage } from "@/api/refrigerator";
import { useUserFoodCartStore, useUserFoodSelectStore } from "@/store";
import { useModal } from "@/hooks/useModal";
import FoodInfoModal from "@/components/Modal/FoodInfoModal";

import type { FoodCartData } from "@/types/api.types";

const Food = ({ items }: { items: FoodCartData[] }) => {
	const { addFoodCart } = useUserFoodCartStore();
	const { isFoodOpenInfo } = useUserFoodSelectStore();
	const { isOpen, openModal, closeModal } = useModal();
	const [selectFood, setSelectFood] = useState<FoodCartData>();

	const handleFoodInfo = (item: FoodCartData) => {
		if (!isFoodOpenInfo) {
			addFoodCart(item.name);
		} else {
			openModal();
			setSelectFood(item);
		}
	};

	return (
		<Wrapper>
			{items.map((item) => (
				<Container key={item.id} onClick={() => handleFoodInfo(item)}>
					<FoodImage src={getFoodImage(item.image)} alt={item.name} />
					<FoodInfo>{item.name}</FoodInfo>
				</Container>
			))}
			{selectFood && (
				<FoodInfoModal
					isOpen={isOpen}
					closeModal={closeModal}
					image={getFoodImage(selectFood.image)}
					item={selectFood}
				/>
			)}
		</Wrapper>
	);
};

export default Food;

const Wrapper = styled.section`
	display: flex;
`;

const Container = styled.div`
	width: 100px;
	height: 100px;
	margin: 5px;
	border-radius: ${BORDER_RADIUS.md};
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const FoodImage = styled.img`
	width: 100%;
	height: 70%;
	border-radius: ${BORDER_RADIUS.md} ${BORDER_RADIUS.md} 0 0;

	object-fit: cover;
	object-position: center;
`;

const FoodInfo = styled.div`
	width: 100%;
	height: 30%;
	padding: 5.5px;

	text-align: center;
	font-size: ${FONT_SIZE.sm};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	background-color: white;
	border-radius: 0 0 ${BORDER_RADIUS.md} ${BORDER_RADIUS.md};
`;
