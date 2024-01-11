import styled from "styled-components";
import { FONT_SIZE, BORDER_RADIUS } from "@/styles/common";

import google from "@/assets/icons/google.svg";
import cook from "@/assets/icons/cook.svg";
import close from "@/assets/icons/close.svg";
import search from "@/assets/icons/search.svg";

import InlineSVG from "react-inlinesvg";

const Icon: Record<string, React.ReactNode> = {
	login: <InlineSVG src={google} width={24} />,
	recipeCreate: <InlineSVG src={cook} width={35} />,
	close: <InlineSVG src={close} width={24} />,
	search: <InlineSVG src={search} width={24} />,
};

const Message: Record<string, React.ReactNode> = {
	login: "구글로 로그인하기",
	recipeCreate: "레시피 만들기",
	close: "닫기",
	search: "검색",
};

interface IconButtonProps {
	type: string;
	onClick: () => void;
	size?: string;
	padding?: string;
}

const IconButton = ({
	type,
	size = FONT_SIZE.md,
	padding = "2.4rem 1.6rem",
	onClick,
}: IconButtonProps) => {
	return (
		<StyledButton onClick={onClick} padding={padding}>
			<div>{Icon[type]}</div>
			<StyledButtonText size={size}>{Message[type]}</StyledButtonText>
		</StyledButton>
	);
};

interface ButtonProps {
	padding: string;
}

const StyledButton = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	width: 100%;

	padding: ${(props) => props.padding};

	border: none;
	border-radius: ${BORDER_RADIUS.md};
	background: var(--white);
	border: 1px solid var(--gray-3);

	font-weight: 600;

	cursor: pointer;
	&:hover {
		background-color: var(--gray-1);
	}
`;

interface TextProps {
	size: string;
}

const StyledButtonText = styled.span<TextProps>`
	margin: 0 auto;
	font-size: ${(props) => props.size};
`;

export default IconButton;
