import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
            this.tail = newNode;
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
    pop() {
        let curNode = this.head;
        for(let i = 0; i < this.size - 2; i++) {
            curNode = curNode.next;
        }
        const returnVal = curNode.next.data;
        curNode.next = null;
        this.tail = curNode;
        this.size -= 1;
        return returnVal;
    }
    contains(value) {
        let curNode = this.head;
        while (curNode) {
            if (curNode.data === value) {
                return true;
            }
            curNode = curNode.next;
        }
        return false;
    }
}