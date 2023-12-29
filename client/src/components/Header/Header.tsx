import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import TextButton from "../Button";

const Header = () => {
	const navigator = useNavigate();

	return (
		<StyledHeader>
			<Link aria-label="나의 냉장고 홈페이지" role="button" to="/">
				<img src={logo} width={136} />
			</Link>

			<StyledRightSection>
				<TextButton
					text="로그인"
					colorType="dark"
					type="button"
					onClick={() => navigator("/")}
				/>
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
