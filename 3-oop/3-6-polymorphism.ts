{
 type CoffeeCup = {
  shots: number;
  hasMilk?: boolean;
  hasSugar?: boolean;
 };

 interface CoffeMaker {
  makeCoffee(shots: number): CoffeeCup;
 }

 class CoffeMachine implements CoffeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7;
  private coffeeBeans: number = 0;

  //항상 처음에 호출됨
  constructor(coffeeBeans: number) {
   this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeMachine {
   return new CoffeMachine(coffeeBeans);
  }

  fillCoffeeBeans(beans: number) {
   if (beans < 0) {
    throw new Error("value for beans should be greater than 0");
   }

   this.coffeeBeans += beans;
  }

  clean(): void {
   console.log("cleaning the machine...");
  }

  private grindBeans(shots: number) {
   console.log(`grinding beans for ${shots}`);
   if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
    throw new Error("Not enough coffee beans!");
   }
   this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
  }

  private preheat(): void {
   console.log("heating up...🔥");
  }

  private extract(shots: number): CoffeeCup {
   console.log(`Pulling ${shots} shots...☕️`);

   return {
    shots,
    hasMilk: false,
   };
  }

  makeCoffee(shots: number): CoffeeCup {
   this.grindBeans(shots);
   this.preheat();

   return this.extract(shots);
  }
 }

 class CaffeLatteMachine extends CoffeMachine {
  constructor(beans: number, public readonly serialNumber: string) {
   super(beans);
  }

  private steamMilk(): void {
   console.log("Steaming some milk...");
  }
  makeCoffee(shots: number): CoffeeCup {
   const coffee = super.makeCoffee(shots);
   this.steamMilk();
   return {
    ...coffee,
    hasMilk: true,
   };
  }
 }

 class SweetCoffefMaker extends CoffeMachine {
  makeCoffee(shots: number): CoffeeCup {
   const coffee = super.makeCoffee(shots);
   return {
    ...coffee,
    hasSugar: true,
   };
  }
 }

 const machines: CoffeMaker[] = [
  new CoffeMachine(16),
  new CaffeLatteMachine(16, "1"),
  new SweetCoffefMaker(16),
  new CoffeMachine(16),
  new CaffeLatteMachine(16, "1"),
  new SweetCoffefMaker(16),
 ];

 machines.forEach((machine) => {
  console.log("-------------------------");
  machine.makeCoffee(1);
 });
}
