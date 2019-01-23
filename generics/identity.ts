function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
console.log(output1);

let output2 = identity("myString");
console.log(output2);