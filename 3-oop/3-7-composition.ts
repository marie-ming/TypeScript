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

 interface MilkFrotther {
  makeMilk(cup: CoffeeCup): CoffeeCup;
 }
 interface SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup;
 }

 // 싸구려 우유 거품기
 class CheapMilkSteamer implements MilkFrotther {
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
 class FancyMilkSteamer implements MilkFrotther {
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
 class ColdMilkSteamer implements MilkFrotther {
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

 class CaffeLatteMachine extends CoffeMachine {
  constructor(
   beans: number,
   public readonly serialNumber: string,
   private milkFrother: MilkFrotther
  ) {
   super(beans);
  }

  makeCoffee(shots: number): CoffeeCup {
   const coffee = super.makeCoffee(shots);
   return this.milkFrother.makeMilk(coffee);
  }
 }

 class SweetCoffefMaker extends CoffeMachine {
  constructor(beans: number, private sugar: SugarProvider) {
   super(beans);
  }

  makeCoffee(shots: number): CoffeeCup {
   const coffee = super.makeCoffee(shots);
   return this.sugar.addSugar(coffee);
  }
 }

 class SweetCaffeLatteMachine extends CoffeMachine {
  constructor(
   beans: number,
   private milk: MilkFrotther,
   private sugar: SugarProvider
  ) {
   super(beans);
  }

  makeCoffee(shots: number): CoffeeCup {
   const coffee = super.makeCoffee(shots);
   const sugarAdd = this.sugar.addSugar(coffee);
   return this.milk.makeMilk(sugarAdd);
  }
 }

 //Milk
 const cheapMilkMaker = new CheapMilkSteamer();
 const fancyMilkMaker = new FancyMilkSteamer();
 const coldMilkMaker = new ColdMilkSteamer();
 //Sugar
 const candySugar = new CandySugarMixer();
 const sugar = new SugarMixer();

 //
 const sweetCandyMachine = new SweetCoffefMaker(12, candySugar);
 const sweetMachine = new SweetCoffefMaker(12, sugar);

 const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
 const coldMilkMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
 const sweetLatteMachine = new SweetCaffeLatteMachine(
  12,
  cheapMilkMaker,
  candySugar
 );
}
