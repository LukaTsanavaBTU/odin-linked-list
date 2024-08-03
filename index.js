import LinkedList from "./LinkedList.js";

const myList = new LinkedList();

myList.append("H");
myList.append("i");
myList.append("!");

console.log(myList.at(0));

myList.prepend("P");

console.log(myList.at(0));
console.log(myList.size);
