const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')

function fib(maxCount) {
	let current = 1
	let last = 0
	let count = 2

	while (count <= maxCount) {
		const result = last + current;
		last = current;
		current = result
		console.log(result)
		count += 1;
	}
}

const number = Number(process.argv[2])

if (number) {
	if (isNaN(number)) {
		throw new Error("must be a number!");
	}
	fib(number)
}


module.exports = { fib }
