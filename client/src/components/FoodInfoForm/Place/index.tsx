import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import type { FoodInfoData } from "@/types/food.type";

const Place = ({ item, update }: FoodInfoData) => {
	const handlePlaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const place = e.target.value;

		update({
			...item,
			place: place,
		});
	};

	return (
		<Wrapper>
			<span>보관위치</span>
			<Select onChange={handlePlaceChange} defaultValue={item.place}>
				<option value="냉동">냉동</option>
				<option value="냉장">냉장</option>
			</Select>
		</Wrapper>
	);
};

export default Place;

const Wrapper = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Select = styled.select`
	width: 130px;
	height: 20px;
	border-radius: ${BORDER_RADIUS.xs};
	text-align: center;
	font-size: ${FONT_SIZE.sm};
	border-color: var(--gray-1);
`;
