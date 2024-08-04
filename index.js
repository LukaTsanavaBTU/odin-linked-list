import LinkedList from "./LinkedList.js";

const myList = new LinkedList();

myList.append("H");
myList.append("e");
myList.append("l");
myList.append("l");
myList.append("o");
myList.append("W");
myList.append("o");
myList.append("r");
myList.append("l");
myList.append("d");
myList.append("!");

console.log(myList.removeAt(4));
console.log(myList.toString());
console.log(myList.size);
console.log(myList.head);
console.log(myList.tail);


