describe("Given No Number", function () {
  it("Should Return 0", function() {
	// arrange
	let calculator = new Calculator();

	// act
	let actual = calculator.Average();

	// assert
	const expected = 0;
	expect(actual).toBe(expected);

  });
});

describe("Given Only one number", function () {
  it("Should Return average", function() {
	// arrange
	let number = 1;
	let calculator = new Calculator();

	// act
	let actual = calculator.Average(number);

	// assert
	const expected = 1;
	expect(actual).toBe(expected);

  });
});

describe("Given two numbers", function () {
  it("Should Return average", function() {
	// arrange
	let calculator = new Calculator();

	// act
	let actual = calculator.Average(1,2);

	// assert
	const expected = 1.5;
	expect(actual).toBe(expected);

  });
});

describe("Given three numbers", function () {
  it("Should Return average", function() {
	// arrange
	let calculator = new Calculator();

	// act
	let actual = calculator.Average(1,2,3);

	// assert
	const expected = 2;
	expect(actual).toBe(expected);

  });
});

describe("Given four numbers", function () {
  it("Should Return average", function() {
	// arrange
	let calculator = new Calculator();

	// act
	let actual = calculator.Average(1,2,3,4);

	// assert
	const expected = 2.5;
	expect(actual).toBe(expected);

  });
});

describe("Given five numbers", function () {
  it("Should Return average", function() {
	// arrange
	let calculator = new Calculator();

	// act
	let actual = calculator.Average(1,2,3,4,5);

	// assert
	const expected = 3;
	expect(actual).toBe(expected);

  });
});


describe("Given ten numbers", function () {
  it("Should Return average", function() {
	// arrange
	let calculator = new Calculator();

	// act
	let actual = calculator.Average(1,2,3,4,5,6,7,8,9,10);

	// assert
	const expected = 5.5;
	expect(actual).toBe(expected);

  });
});