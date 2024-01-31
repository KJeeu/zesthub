import styled from "styled-components";
import { BORDER_RADIUS, FONT_SIZE } from "@/styles/common";

interface TextButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	type: "button" | "submit";
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	colorType: "dark" | "light";
	disabled?: boolean;
	width?: `${string}px` | `${string}%`;
	fontSize?: "xs" | "sm" | "md" | "lg";
}

function TextButton({ text, colorType, ...props }: TextButtonProps) {
	return (
		<StyledButton {...props} $colorType={colorType}>
			{text}
		</StyledButton>
	);
}

export default TextButton;

const StyledButton = styled.button<{
	$colorType: "dark" | "light";
	width?: `${string}px` | `${string}%`;
	fontSize?: "xs" | "sm" | "md" | "lg";
}>`
	width: ${({ width }) => width};

	padding: 1.2rem 2.4rem;

	border: none;
	border-radius: ${BORDER_RADIUS.sm};
	background-color: ${({ $colorType }) =>
		$colorType === "dark" ? "var(--primary-5)" : "var(--primary-1)"};

	color: ${({ $colorType }) =>
		$colorType === "dark" ? "var(--white)" : "var(--primary-5)"};

	font-size: ${FONT_SIZE.md};

	font-size: ${({ fontSize }) =>
		fontSize === "xs"
			? `${FONT_SIZE.xs}`
			: fontSize === "sm"
				? `${FONT_SIZE.sm}`
				: fontSize === "lg"
					? `${FONT_SIZE.lg}`
					: `${FONT_SIZE.md}`};

	&:hover {
		background-color: ${({ $colorType }) =>
			$colorType === "dark" ? "var(--primary-7);" : "var(--primary-2)"};
	}
`;
