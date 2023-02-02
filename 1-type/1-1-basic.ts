{
 //number
 const num: number = 1;

 //string
 const str: string = "hello";

 //boolean
 const boal: boolean = false;

 //undefined
 let name: undefined; // X
 let age: number | undefined;
 age = undefined;
 age = 21;

 function find(): number | undefined {
  return undefined;
 }

 //null
 let person: null; //X
 let person2: string | null;

 //보편적으로 null 보다는 undefined 를 많이씀

 //unknown 왠만하면 사용하지 말 것
 let notSure: unknown = 0;
 notSure = "he";
 notSure = true;

 //any 이것도 왠만하면 ㄴㄴ
 let anything: any = 0;
 anything = "hello";

 //void 생략가능
 function print(): void {
  console.log("hello");
  return;
 }
 let unusable: void = undefined; // X

 //never
 function throwError(message: string): never {
  //message -> server(log)
  throw new Error(message);
  while (true) {}
 }
 let neverEnding: never; // X

 //object
 let obj: object; // X
 function acceptSomeObject(obj: object) {}
 acceptSomeObject({ name: "minji" });
 acceptSomeObject({ animal: "dog" });
}
