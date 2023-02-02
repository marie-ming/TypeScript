{
 //Type Inference  추천하지 않지만 간단할 경우 사용

 let test = "hello";
 function print(message = "hellp") {
  console.log(message);
 }
 print("hihi");

 function add(x: number, y: number): number {
  return x + y;
 }
 const result = add(1, 2);
}
