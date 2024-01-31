import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import type { FoodInfoData } from "@/types/food.type";

const Name = ({ item, update }: FoodInfoData) => {
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.value;

		update({
			...item,
			name: name,
		});
	};

	return (
		<Wrapper>
			<span>식품명</span>
			<Input type="text" onBlur={handleNameChange} defaultValue={item.name} />
		</Wrapper>
	);
};

export default Name;

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
