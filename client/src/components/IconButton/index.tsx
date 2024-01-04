import styled from "styled-components";
import { FONT_SIZE } from "@/styles/common";

import { useAuth } from "@/hooks/useAuth";
import { login } from "@/service/login";

import google from "@/assets/icons/google.svg";
import InlineSVG from "react-inlinesvg";

const Icon: Record<string, React.ReactNode> = {
	login: <InlineSVG src={google} width={24} />,
};

const Message: Record<string, React.ReactNode> = {
	login: "구글로 로그인하기",
};

interface IconButtonProps {
	type: string;
	closeModal?: () => void;
}

const IconButton = ({ type, closeModal }: IconButtonProps) => {
	const { setUser } = useAuth();

	const handleClick = (type: string) => {
		switch (type) {
			case "login":
				login(setUser);
				break;
		}

		if (closeModal) {
			closeModal();
		}
	};

	return (
		<StyledButton onClick={() => handleClick(type)}>
			<div>{Icon[type]}</div>
			<StyledButtonText>{Message[type]}</StyledButtonText>
		</StyledButton>
	);
};

const StyledButton = styled.button`
	display: flex;
	align-items: center;

	width: 100%;
	height: fit-content;

	padding: 2.4rem 1.6rem;

	border: none;
	border-radius: 12px;
	background: var(--white);
	border: 1px solid var(--gray-3);

	font-size: 1.4rem;
	font-weight: 600;

	cursor: pointer;
	&:hover {
		background-color: var(--gray-1);
	}
`;

const StyledButtonText = styled.span`
	margin: 0 auto;

	color: inherit;
	font-size: ${FONT_SIZE.md};
`;

export default IconButton;
