import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import type { FoodInfoImageData } from "@/types/food.type";

const Image = ({ item, update, imageUrl }: FoodInfoImageData) => {
	const [itemImage, setItemImage] = useState<string | ArrayBuffer | null>(
		imageUrl,
	);

	const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = () => {
				setItemImage(reader.result);
				update(
					{
						...item,
						image: file.name,
					},
					file,
				);
			};
		}
	};

	return (
		<Wrapper>
			<ImageView src={String(itemImage)} alt={item.name} />
			<input width="50px" accept="image/*" type="file" onChange={onUpload} />
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ImageView = styled.img`
	width: 300px;
	height: 300px;
`;

export default Image;
