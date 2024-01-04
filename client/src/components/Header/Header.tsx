import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useModal } from "@/hooks/useModal";
import { useAuth } from "@/hooks/useAuth";
import { Logout } from "@/service/logout";

import logo from "@/assets/logo.png";
import TextButton from "@/components/TextButton";
import LoginModal from "../Modal/LoginModal";

const Header = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const { user, setUser } = useAuth();
	const [isLogin, setIsLogin] = useState(!!user);

	useEffect(() => {
		setIsLogin(!!user);
	}, [user]);

	return (
		<StyledHeader>
			<Link aria-label="나의 냉장고 홈페이지" role="button" to="/">
				<img src={logo} width={136} alt="로고" />
			</Link>

			<StyledRightSection>
				{isLogin ? (
					<TextButton
						text="로그아웃"
						colorType="dark"
						type="button"
						onClick={() => Logout(setUser)}
					/>
				) : (
					<TextButton
						text="로그인"
						colorType="dark"
						type="button"
						onClick={openModal}
					/>
				)}
				<LoginModal isOpen={isOpen} closeModal={closeModal} />
			</StyledRightSection>
		</StyledHeader>
	);
};

export default Header;

const StyledRightSection = styled.section`
	display: flex;
	gap: 2.4rem;
`;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	width: 100%;
	height: 80px;

	padding: 1.2rem 2.4rem;

	background-color: var(--white);
	border-bottom: 1px solid var(--gray-1);
`;
