import { useState } from "react";

export const useFoodSelectList = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openFoodSelectList = () => {
		setIsOpen(true);
	};

	const closeFoodSelectList = () => {
		setIsOpen(false);
	};

	return {
		isOpen,
		openFoodSelectList,
		closeFoodSelectList,
	};
};
