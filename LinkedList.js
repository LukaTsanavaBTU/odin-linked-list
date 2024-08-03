import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = 0;
        this.size = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let curNode = this.head; 
            while (curNode.next) {
                curNode = curNode.next;
            }
            curNode.next = newNode;
        }
        this.size += 1;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.size += 1;
    }
    at(index) {
        let curNode = this.head;
        for(let i = 0; i < index; i++) {
            curNode = curNode.next;
            if (!curNode) {
                return null;
            }
        }
        return curNode.data;
    }
}