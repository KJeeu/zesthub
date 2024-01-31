import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import type { FoodInfoData } from "@/types/food.type";

const Count = ({ item, update }: FoodInfoData) => {
	const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const count = e.target.value;

		update({
			...item,
			count: count,
		});
	};

	return (
		<Wrapper>
			<span>구매일자</span>
			<Input
				type="number"
				min="1"
				onBlur={handleCountChange}
				defaultValue={item.count}
			/>
		</Wrapper>
	);
};

export default Count;

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
