import styled from "styled-components";
import { Navigate } from "react-router-dom";
import introduceBack from "@/assets/introduceBack.png";
import TextButton from "@/components/TextButton";
import { FONT_SIZE } from "@/styles/common";
import { useModal } from "@/hooks/useModal";
import LoginModal from "@/components/Modal/LoginModal";
import { useAuth } from "@/hooks/useAuth";
import { PATH } from "@/constants/path";

const IntroducePage = () => {
	const { user } = useAuth();
	const { isOpen, openModal, closeModal } = useModal();

	if (user) return <Navigate to={`${PATH.main}`} />;

	return (
		<Container>
			<Introduce>
				<Title>
					식품 낭비는 이제 그만! <br /> Zesthub로 편리하게 관리해요
				</Title>
				<SubTitle>식품 관리뿐만 아니라 레시피 추천까지 한 번에</SubTitle>
				<TextButton
					text="시작하기"
					colorType="dark"
					type="button"
					onClick={openModal}
				/>
				<LoginModal isOpen={isOpen} closeModal={closeModal} />
			</Introduce>
		</Container>
	);
};

export default IntroducePage;

const Container = styled.section`
	height: calc(100% - 80px);
	background: url(${introduceBack}) center/cover no-repeat;
`;

const Introduce = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
`;

const Title = styled.h1`
	font-weight: bold;
	text-align: center;
`;

const SubTitle = styled.p`
	font-size: ${FONT_SIZE.lg};
	color: var(--gray-4);
`;
