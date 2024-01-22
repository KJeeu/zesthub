const ingredientsFiler = (data: string) => {
	// ● 와 : 사이의 한글 제외
	let step1 = data.replace(/●([^:]+):/g, "");

	// : 와 - 사이의 한글 제외
	step1 = step1.replace(/-.*:/, "").trim();

	// 각 식재료와 그람수
	const detail = step1
		.split(",")
		.flatMap((item) => (item.includes("\n") ? item.split("\n") : item))
		.map((item) => item.trim())
		.filter((item) => item !== "");

	// 괄호 안의 한글 제외
	const step2 = step1.replace(/\([^)]+\)/g, "");

	// 숫자 앞의 한글만 가져오기
	let step3: string[] | null = step2.match(/([가-힣]+)(?=\s\d)/g);

	//step3가 Null 일 경우 사과 30g(1/5개) 형태가 아닌 사과(1/5개)형태의 경우
	if (step3 === null) {
		const step4 = step2.replace(/재료\s/g, "");
		step3 = step4.split(", ");
	}

	//"느타리버섯 \n 표고버섯"과 같이 나오는 부분 수정
	const step4: string[] = [];

	step3.forEach((food) => {
		const subFood = food.split("\n"); // \n을 기준으로 분할하여 배열 생성
		step4.push(...subFood); // 분할된 배열을 결과 배열에 추가
	});

	// 각 식재료
	const name = [...new Set(step4)].filter((x) => x !== "물");

	return { name, detail };
};

export default ingredientsFiler;
