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

  constructor(
   coffeeBeans: number,
   private milk: MilkFrother,
   private sugar: SugarProvider
  ) {
   this.coffeeBeans = coffeeBeans;
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
   const coffee = this.extract(shots);
   const sugarAdd = this.sugar.addSugar(coffee);
   return this.milk.makeMilk(sugarAdd);

   return this.extract(shots);
  }
 }

 interface MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup;
 }
 interface SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup;
 }

 // 싸구려 우유 거품기
 class CheapMilkSteamer implements MilkFrother {
  private steamMilk(): void {
   console.log("Steaming some milk...");
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
   this.steamMilk();
   return {
    ...cup,
    hasMilk: true,
   };
  }
 }
 class FancyMilkSteamer implements MilkFrother {
  private steamMilk(): void {
   console.log("Fancy Steaming some milk...");
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
   this.steamMilk();
   return {
    ...cup,
    hasMilk: true,
   };
  }
 }
 class ColdMilkSteamer implements MilkFrother {
  private steamMilk(): void {
   console.log("Cold Steaming some milk...");
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
   this.steamMilk();
   return {
    ...cup,
    hasMilk: true,
   };
  }
 }
 class NoMilk implements MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup {
   return cup;
  }
 }

 // 설탕 제조기
 class CandySugarMixer implements SugarProvider {
  private getSuger() {
   console.log("Getting som sugar from candy 🍬");
   return true;
  }
  addSugar(cup: CoffeeCup): CoffeeCup {
   const sugar = this.getSuger();
   return {
    ...cup,
    hasSugar: true,
   };
  }
 }
 class SugarMixer implements SugarProvider {
  private getSuger() {
   console.log("Getting som sugar from jar!!");
   return true;
  }
  addSugar(cup: CoffeeCup): CoffeeCup {
   const sugar = this.getSuger();
   return {
    ...cup,
    hasSugar: true,
   };
  }
 }
 class NoSugar implements SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup {
   return cup;
  }
 }

 //Milk
 const cheapMilkMaker = new CheapMilkSteamer();
 const fancyMilkMaker = new FancyMilkSteamer();
 const coldMilkMaker = new ColdMilkSteamer();
 const noMilk = new NoMilk();
 //Sugar
 const candySugar = new CandySugarMixer();
 const sugar = new SugarMixer();
 const noSugar = new NoSugar();

 //
 const sweetCandyMachine = new CoffeMachine(12, noMilk, candySugar);
 const sweetMachine = new CoffeMachine(12, noMilk, sugar);

 const latteMachine = new CoffeMachine(12, cheapMilkMaker, noSugar);
 const coldMilkMachine = new CoffeMachine(12, coldMilkMaker, noSugar);
 const sweetLatteMachine = new CoffeMachine(12, cheapMilkMaker, candySugar);
}
