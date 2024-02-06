import { useState } from "react";
import styled from "styled-components";
import Modal from "@/components/Modal";
import { FONT_SIZE } from "@/styles/common";
import FoodInfoForm from "@/components/FoodInfoForm";
import TextButton from "@/components/TextButton";
import { useChangeRefriStore } from "@/store";
import {
	deleteFood,
	deleteFoodImage,
	uploadImage,
	updateFood,
} from "@/api/refrigerator";

import type { FoodCartData } from "@/types/api.types";

interface FoodInfoModalProps {
	isOpen: boolean;
	closeModal: () => void;
	image: string;
	item: FoodCartData;
}

const FoodInfoModal = ({
	isOpen,
	closeModal,
	image,
	item,
}: FoodInfoModalProps) => {
	const { change } = useChangeRefriStore();
	const [newItem, setNewItem] = useState({
		...item,
	});
	const [newImageFile, setNewImageFile] = useState<File>();

	const getFood = (item: FoodCartData, file?: File) => {
		setNewItem(item);
		if (file) {
			setNewImageFile(file);
		}
	};

	const handleDelete = async () => {
		try {
			await deleteFood(item.id);
			deleteFoodImage(item.image);
			closeModal();
			change();
		} catch (error) {
			alert(`삭제 실패: ${error}`);
		}
	};

	const handleUpdate = async () => {
		try {
			if (item.image !== newItem.image) {
				deleteFoodImage(item.image);
				await uploadImage(newImageFile!);
				await updateFood(newItem);
			} else {
				await updateFood(newItem);
			}
			change();
			closeModal();
		} catch (error) {
			alert(`수정 실패: ${error}`);
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Container>
				<Title>상세보기</Title>
				<Content>
					<FoodInfoForm update={getFood} item={item} imageUrl={image} />
					<ButtonBox>
						<TextButton
							text="삭제"
							colorType="dark"
							type="button"
							width="100px"
							onClick={handleDelete}
						/>
						<TextButton
							text="저장"
							colorType="dark"
							type="button"
							width="100px"
							onClick={handleUpdate}
						/>
					</ButtonBox>
				</Content>
			</Container>
		</Modal>
	);
};

export default FoodInfoModal;

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
