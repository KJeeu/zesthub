import { useState, useEffect } from "react";
import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import { getFoodImage } from "@/api/refrigerator";
import { useUserFoodCartStore, useUserFoodSelectStore } from "@/store";

import type { FoodCartData } from "@/types/api.types";

const Food = ({ items }: { items: FoodCartData[] }) => {
	const { addFoodCart } = useUserFoodCartStore();
	const { isFoodOpenInfo } = useUserFoodSelectStore();
	const [imageUrls, setImageUrls] = useState(new Map());

	const handleFoodInfo = (item: FoodCartData) => {
		if (!isFoodOpenInfo) {
			addFoodCart(item.name);
		}
	};

	useEffect(() => {
		const fetchImage = async () => {
			const urls = new Map();
			for (const item of items) {
				urls.set(item.id, await getFoodImage(item.image));
			}
			setImageUrls(urls);
		};

		fetchImage();
	}, [items]);

	return (
		<Wrapper>
			{items.map((item) => (
				<Container key={item.id} onClick={() => handleFoodInfo(item)}>
					<FoodImage src={imageUrls.get(item.id)} alt={item.name} />
					<FoodInfo>{item.name}</FoodInfo>
				</Container>
			))}
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
