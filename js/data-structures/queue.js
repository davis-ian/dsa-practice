export class Queue {
    constructor() {
        this.root = null
    }

    push(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node
            return;
        }

        let current = this.root;
        while (current.next) {
            current = current.next
        }
        current.next = node;

    }

    pop() {
        if (!this.root) return null;

        let root = this.root;
        this.root = this.root.next;
        return root.value;
    }

    print() {
        let current = this.root;
        while (current != null) {
            console.log(current.value)
            current = current.next
        }
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}