import styled from "styled-components";
import IconButton from "../IconButton";
import AddFoodModal from "../Modal/AddFoodModal";
import { useModal } from "@/hooks/useModal";

const AddFood = () => {
	const { isOpen, openModal, closeModal } = useModal();

	const handleAddFood = () => {
		openModal();
	};

	return (
		<Wrapper>
			<Container>
				<IconButton type="addFood" onClick={handleAddFood} padding="1.2rem" />
			</Container>
			<AddFoodModal isOpen={isOpen} closeModal={closeModal} />
		</Wrapper>
	);
};

export default AddFood;

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 2rem;
`;

const Container = styled.section`
	width: 80%;
`;
