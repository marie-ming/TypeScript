/**
 * Let's make a game 🕹
 */

type Arrow = "up" | "down" | "left" | "right";

let position = { x: 0, y: 0 };
function movee(direction: Arrow) {
 switch (direction) {
  case "up":
   return (position.y += 1);
   break;
  case "down":
   return (position.y -= 1);
   break;
  case "left":
   return (position.x -= 1);
   break;
  case "right":
   return (position.x += 1);
   break;
  default:
   throw Error(`unkown direction: ${direction}`);
 }
}

console.log(position); // { x: 0, y: 0}
movee("up");
console.log(position); // { x: 0, y: 1}
movee("down");
console.log(position); // { x: 0, y: 0}
movee("left");
console.log(position); // { x: -1, y: 0}
movee("right");
console.log(position); // { x: 0, y: 0}
