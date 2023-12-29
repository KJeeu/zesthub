import styled from "styled-components";
import logo from "@/assets/logo.png";

const Header = () => {
	return <StyledHeader></StyledHeader>;
};

export default Header;

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
