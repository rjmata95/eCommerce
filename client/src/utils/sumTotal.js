export function sumTotal(toSum) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = toSum.reduce(reducer, 0);
  return sum;
}
