// //JavaScript
// function jsAdd(num1, num2) {
//  return num1 + num2;
// }

// //TypeScript
// function add(num1: number, num2: number): number {
//  return num1 + num2;
// }

// //JavaScript
// function jsFetchNum(id) {
//  //code..

//  return new Promise((resolve, reject) => {
//   resolve(100);
//  });
// }

// //TypeScript
// function fetchNum(id: string): Promise<number> {
//  //code..

//  return new Promise((resolve, reject) => {
//   resolve(100);
//  });
// }

//JavaScript => TypeScript
//Optional parameter
function printName(firstName: string, lasrName?: string) {
 console.log(firstName);
 console.log(lasrName);
}
printName("Minji", "Jung");
printName("Marie");
printName("Anna", undefined);

//Defalut parameter
function printMessage(message: string = "default message") {
 console.log(message);
}
printMessage();

//Rest parameter
function addNumbers(...nums: number[]): number {
 return nums.reduce((a, b) => a + b);
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3, 4));
