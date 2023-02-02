{
 //Type Assertions 정말정말 장담하는 경우가 아님 사용X

 function jsStrFunc(): any {
  return 2;
 }
 const result = jsStrFunc();
 console.log((result as string).length);
 console.log((<string>result).length);

 //Error
 const wrong: any = 5;
 console.log((wrong as Array<number>).push(3));

 //! 사용
 function findNumbers(): number[] | undefined {
  return undefined;
 }
 const numbers = findNumbers();
 numbers!.push(2); //무조건 숫자만 받을꺼야!
}
