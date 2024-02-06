import { useState, useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Food from "../Food";
import { useLoginUser } from "@/store";

import { getFoodCart } from "@/api/refrigerator";
import { useUserCategoryStore } from "@/store";
import { useChangeRefriStore } from "@/store";

import type { FoodCartData } from "@/types/api.types";

const FoodList = ({ type }: { type: string }) => {
	const { category } = useUserCategoryStore();
	const { isChange } = useChangeRefriStore();
	const { loginUser } = useLoginUser();
	const [foodCart, setFoodCart] = useState<[FoodCartData[], FoodCartData[]]>([
		[],
		[],
	]);

	// const { data: foodCartData } = useSuspenseQuery({
	// 	queryKey: ["category", category, type],
	// 	queryFn: () => getFoodCart(type, category),
	// 	staleTime: Infinity,
	// 	gcTime: Infinity,
	// });

	useEffect(() => {
		getFoodCart(type, category, loginUser!).then((foodCart) => {
			const half = Math.floor(foodCart.length / 2);
			setFoodCart([foodCart.slice(half), foodCart.slice(0, half)]);
		});
	}, [category, isChange, loginUser]);

	return (
		<Wrapper>
			<>
				<Food items={foodCart[0]} />
				<Food items={foodCart[1]} />
			</>
		</Wrapper>
	);
};

export default FoodList;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;

	> button {
		text-align: center;
		scroll-snap-align: start;
		flex: none;
	}
`;
