{
 type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
 };
 class CoffeMaker {
  static BEANS_GRAMM_PER_SHOT: number = 7;
  coffeeBeans: number = 0;

  //항상 처음에 호출됨
  constructor(coffeeBeans: number) {
   this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeMaker {
   return new CoffeMaker(coffeeBeans);
  }

  makeCoffee(shots: number): CoffeeCup {
   if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
    throw new Error("Not enough coffee beans!");
   }

   this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;

   return {
    shots, //key, value 값이 동일하다면 생략 가능
    hasMilk: false,
   };
  }
 }

 const maker = new CoffeMaker(32);
 console.log(maker);
 const maker2 = new CoffeMaker(14);
 console.log(maker2);

 const maker3 = CoffeMaker.makeMachine(3);
 console.log(maker3);
}
