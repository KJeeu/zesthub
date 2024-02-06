import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@/components/Modal";
import { FONT_SIZE } from "@/styles/common";
import FoodInfoForm from "@/components/FoodInfoForm";
import TextButton from "@/components/TextButton";
import { useChangeRefriStore } from "@/store";
import { uploadImage, createFoodCart } from "@/api/refrigerator";
import { defaultImage } from "@/constants/defaultImage";
import { initAddFoodInfo } from "@/constants/initAddFoodInfo";

import type { FoodCartData } from "@/types/api.types";

interface FoodInfoModalProps {
	isOpen: boolean;
	closeModal: () => void;
}

const AddFoodModal = ({ isOpen, closeModal }: FoodInfoModalProps) => {
	const { change } = useChangeRefriStore();
	const [newItem, setNewItem] = useState<FoodCartData>(initAddFoodInfo);
	const [newImageFile, setNewImageFile] = useState<File>();

	useEffect(() => {
		setNewItem(initAddFoodInfo);
	}, [isOpen]);

	const getFood = (item: FoodCartData, file?: File) => {
		setNewItem(item);
		if (file) {
			setNewImageFile(file);
		}
	};

	const handleCreate = async () => {
		const isAnyEmpty = Object.values(newItem).some((item) => item === "");

		if (newItem.image === "") {
			return alert("이미지를 추가해주세요");
		}

		if (isAnyEmpty) {
			return alert("빈 칸을 채워주세요");
		}

		try {
			await uploadImage(newImageFile!);
			await createFoodCart(newItem);
			change();
			closeModal();
			setNewItem(initAddFoodInfo);
		} catch (error) {
			alert(`저장 실패: ${error}`);
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Container>
				<Title>냉장고에 재료 추가하기</Title>
				<Content>
					<FoodInfoForm
						update={getFood}
						item={newItem}
						imageUrl={defaultImage}
					/>
					<ButtonBox>
						<TextButton
							text="추가"
							colorType="dark"
							type="button"
							width="80px"
							onClick={handleCreate}
						/>
					</ButtonBox>
				</Content>
			</Container>
		</Modal>
	);
};

export default AddFoodModal;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
	width: 360px;
`;

const Title = styled.div`
	font-size: ${FONT_SIZE.lg};
	font-weight: bold;
`;

const Content = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 2rem 0;
	font-size: ${FONT_SIZE.md};
	gap: 2rem;
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	margin-bottom: 2rem;
`;
