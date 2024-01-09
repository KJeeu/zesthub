import styled from "styled-components";
import Modal from "@/components/Modal";
import { FONT_SIZE } from "@/styles/common";
import IconButton from "@/components/IconButton";

import { useLogin } from "@/service/useLogin";

type LoginModalProps = {
	isOpen: boolean;
	closeModal: () => void;
};

const LoginModal = ({ isOpen, closeModal }: LoginModalProps) => {
	const { login } = useLogin();

	const handleLogin = () => {
		login();
		closeModal();
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Container>
				<Title>간편 로그인</Title>
				<Content>
					<IconButton type="login" onClick={handleLogin} />
				</Content>
			</Container>
		</Modal>
	);
};

export default LoginModal;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
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
	gap: 7rem;
	width: 100%;
	height: 100%;
	margin: 2rem 0;
	font-size: ${FONT_SIZE.md};
`;
