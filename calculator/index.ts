enum Operator {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
  Modulo = "modulo"
}

type Operation = (x: number, y: number) => number;

const operations: [Operator, Operation][] = [];

const add: Operation = function (first: number, second: number) {
  return first + second;
};
operations.push([Operator.Add, add]);

const subtract = function (first: number, second: number) {
  return first - second;
};
operations.push([Operator.Subtract, subtract]);

const multiply = function (first: number, second: number) {
  return first * second;
};
operations.push([Operator.Multiply, multiply]);

const divide = function (first: number, second: number) {
  return first / second;
};
operations.push([Operator.Divide, divide]);

const calculator = function (first: number, second: number, op: Operator) {
  const tuple = operations.find(tpl => tpl[0] === op);
  const operation = tuple![1];
  const result = operation(first, second);
  return result;
};

console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));

const modulo = function (first: number, second: number) {
  return first % second;
};
operations.push([Operator.Modulo, modulo]);

console.log(calculator(70, 3, Operator.Modulo));