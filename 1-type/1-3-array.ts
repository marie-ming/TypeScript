{
 //Array
 const fruits: string[] = ["🍎", "🍋"];
 const scores: Array<number> = [1, 3, 4];
 function printArray(fruits: readonly string[]) {}

 //Tuple -> interface,type alias, class
 //가독성이 떨어지므로 추천하지 않음
 let student: [string, number];
 student = ["name", 123];
 student[0]; //name
 student[1]; //123
 const [name, age] = student;
}
