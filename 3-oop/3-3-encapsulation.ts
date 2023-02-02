{
 type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
 };
 class CoffeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7;
  private coffeeBeans: number = 0;

  //항상 처음에 호출됨
  private constructor(coffeeBeans: number) {
   this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeMaker {
   return new CoffeMaker(coffeeBeans);
  }

  fillCoffeeBeans(beans: number) {
   if (beans < 0) {
    throw new Error("value for beans should be greater than 0");
   }

   this.coffeeBeans += beans;
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

 const maker = CoffeMaker.makeMachine(32);
 maker.fillCoffeeBeans(32);

 class User {
  get fullName(): string {
   return `${this.firstName} ${this.lastName}`;
  }

  private interalAge = 4;
  get age(): number {
   return this.interalAge;
  }
  set age(num: number) {
   if (num < 0) {
   }
   this.interalAge = num;
  }

  constructor(private firstName: string, private lastName: string) {}
 }
 const user = new User("minji", "Jung");
 user.age = 6;
 console.log(user.fullName);
}
