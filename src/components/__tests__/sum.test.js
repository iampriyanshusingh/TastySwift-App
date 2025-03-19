import sum  from "../sum";

test("Sum func should calculate the sum of the two numbers", () => {
  const result = sum(2,2);

  //Assertion
  expect(result).toBe(4);
});
