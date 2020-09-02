function fibonacci(i) {
	if (i < 2) {
		return i === 0 ? 0 : 1;
	}
	return fibonacci(i - 1) + fibonacci(i - 2);
}

function main(n) {
	if (n < 1 || !/^[0-9]*[1-9][0-9]*$/.test(n)) {
		throw new Error("fibonacci params should positive integer");
	}
	let result = Array.from({ length: n })
		.map((v, p) => fibonacci(p + 1))
		.join(",");
	console.warn(result);
}

main(30);
