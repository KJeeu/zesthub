import styled from "styled-components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import { getCategory } from "@/api/refrigerator";
import type { FoodInfoData } from "@/types/food.type";
import type { CategoryData } from "@/types/api.types";

const Info = ({ item, update }: FoodInfoData) => {
	const { data: categoryData } = useSuspenseQuery<CategoryData[]>({
		queryKey: ["category"],
		queryFn: getCategory,
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedCategory = categoryData?.find(
			(category) => category.title === e.target.value,
		);
		if (selectedCategory) {
			update({
				...item,
				category: e.target.value,
			});
		}
	};

	return (
		<Category>
			<span>카테고리</span>
			<Select onChange={handleSelectChange} defaultValue={item.category}>
				{categoryData?.map((category) => (
					<option key={category.title} value={category.title}>
						{category.title}
					</option>
				))}
			</Select>
		</Category>
	);
};

export default Info;

const Category = styled.div`
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
