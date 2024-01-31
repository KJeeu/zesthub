import Name from "./Name";
import Image from "./Image";
import Info from "./Info";
import BuyDate from "./BuyDate";
import ExpiryDate from "./ExpiryDate";
import Count from "./Count";
import Place from "./Place";

import type { FoodInfoImageData } from "@/types/food.type";

const FoodInfoForm = ({ update, item, imageUrl }: FoodInfoImageData) => {
	return (
		<div>
			<Image item={item} update={update} imageUrl={imageUrl} />
			<Name item={item} update={update} />
			<Info item={item} update={update} />
			<BuyDate item={item} update={update} />
			<ExpiryDate item={item} update={update} />
			<Count item={item} update={update} />
			<Place item={item} update={update} />
		</div>
	);
};

export default FoodInfoForm;
