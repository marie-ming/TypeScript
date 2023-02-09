interface Stack {
 readonly size: number;
 push(value: string): void;
 pop(): void;
}

type StackNode = {
 readonly value: string;
 readonly next?: StackNode;
};

class StackImpl implements Stack {
 private _size: number = 0;
 private head?: StackNode;

 constructor(private capacity: number) {}
 get size() {
  return this._size;
 }

 push(value: string) {
  if (this.size === this.capacity) {
   throw new Error("Stack is full!");
  }
  const node: StackNode = { value, next: this.head };
  this.head = node;
  this._size++;
 }
 pop(): string {
  //null == undefined, null !== undefined
  if (this.head == null) {
   throw new Error("Stack is empty!");
  }
  const node = this.head;
  this.head = node.next;
  this._size--;
  return node.value;
 }
}

const stack = new StackImpl(10);
stack.push("asd 1");
stack.push("asd 2");
stack.push("asd 3");
while (stack.size !== 0) {
 console.log(stack.pop());
}

//stack.pop(); Error
