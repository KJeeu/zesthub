import styled from "styled-components";
import { BORDER_RADIUS } from "@/styles/common";

interface ImageSectionProps {
	width?: string;
	height?: string;
	$minWidth?: string;
	$minHeight?: string;
}

const ImageSection = styled.section<ImageSectionProps>`
	position: relative;
	overflow: hidden;

	width: ${({ width }) => width};
	min-width: ${({ $minWidth }) => $minWidth};

	height: ${({ height }) => height};
	min-height: ${({ $minHeight }) => $minHeight};

	border-radius: ${BORDER_RADIUS.md};
`;

const ImageView = styled.img`
	position: absolute;
	/* inset: 0; */

	object-fit: cover;

	width: 100%;
	height: 100%;
`;

interface ImageProps extends ImageSectionProps {
	menu: string;
	menuImage: string;
}

const Image = ({
	menu,
	menuImage,
	width = "100%",
	height = "100%",
	$minWidth = "150px",
	$minHeight = "150px",
}: ImageProps) => {
	return (
		<ImageSection
			width={width}
			height={height}
			$minWidth={$minWidth}
			$minHeight={$minHeight}
		>
			<ImageView src={menuImage} alt={menu} />
		</ImageSection>
	);
};

export default Image;
