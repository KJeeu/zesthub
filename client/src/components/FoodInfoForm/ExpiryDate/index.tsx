import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";

import type { FoodInfoData } from "@/types/food.type";

const ExpiryDate = ({ item, update }: FoodInfoData) => {
	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = e.target.value;

		update({
			...item,
			expiryDate: date,
		});
	};

	return (
		<Wrapper>
			<span>소비기한</span>
			<Input
				type="date"
				onBlur={handleDateChange}
				defaultValue={item.expiryDate}
			/>
		</Wrapper>
	);
};

export default ExpiryDate;

const Wrapper = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Input = styled.input`
	width: 130px;
	height: 20px;
	border-radius: ${BORDER_RADIUS.xs};
	text-align: center;
	font-size: ${FONT_SIZE.sm};
	border: 1px solid var(--gray-1);
`;
