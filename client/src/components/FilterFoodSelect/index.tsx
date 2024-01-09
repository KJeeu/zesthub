import styled from "styled-components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";
import { getCategory } from "@/api/refrigerator";
import { useUserCategoryStore } from "@/store";

import type { CategoryData } from "@/types/api.types";

const FilterFoodSelect = () => {
	const { updateCategory } = useUserCategoryStore();

	const { data: categoryData } = useSuspenseQuery<CategoryData[]>({
		queryKey: ["category"],
		queryFn: getCategory,
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedCategory = categoryData.find(
			(category) => category.title === e.target.value,
		);
		if (selectedCategory) {
			updateCategory(selectedCategory);
		}
	};

	return (
		<Wrapper>
			<Select onChange={handleSelectChange}>
				<option value="">전체</option>
				{categoryData.map((category) => (
					<option key={category.title} value={category.title}>
						{category.title}
					</option>
				))}
			</Select>
		</Wrapper>
	);
};

export default FilterFoodSelect;

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const Select = styled.select`
	width: 90px;
	height: 20px;
	border-radius: ${BORDER_RADIUS.xs};
	text-align: center;
	font-size: ${FONT_SIZE.sm};
	border-color: var(--gray-1);
`;
