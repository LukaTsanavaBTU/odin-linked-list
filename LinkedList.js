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
        index = (index >= 0) ? index : (this.size + index); 
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of range");
        }
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
    find(value) {
        let curNode = this.head;
        let index = 0;
        while (curNode) {
            if (curNode.data === value) {
                return index;
            }
            curNode = curNode.next;
            index += 1;
        }
        return null;
    }
    toString() {
        if (!this.head) {
            return "null";
        }
        let curNode = this.head;
        let returnString = "";
        while (curNode) {
            returnString += `( ${curNode.data} ) -> `;
            curNode = curNode.next;
        }
        returnString += "null"
        return returnString;
    }
    insertAt(value, index) {
        // Make choosing element from the end using negative index possible
        index = (index >= 0) ? index : (this.size + index + 1); 
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of range");
        }
        else if (index === 0) {
            this.prepend(value);
        } else {
            const newNode = new Node(value);
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++) {
                curNode = curNode.next;
            }
            newNode.next = curNode.next;
            curNode.next = newNode;
            if (!newNode.next) {
                this.tail = newNode;
            }
            this.size += 1;
        }
    }
    removeAt(index) {
        // Make choosing element from the end using negative index possible
        index = (index >= 0) ? index : (this.size + index); 
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of range");
        }
        let returnVal;
        if (index === 0 ) {
            returnVal = this.head.data;
            this.head = this.head.next;
            if (!this.head.next) {
                this.tail = this.head;
            }
        } else {
            let curNode = this.head;
            for(let i = 0; i < index - 1; i++) {
                curNode = curNode.next;
            }
            returnVal = curNode.next.data;
            curNode.next = curNode.next.next;
            if (!curNode.next) {
                this.tail = curNode;
            }
        }
        this.size -= 1;
        return returnVal;
    }
}