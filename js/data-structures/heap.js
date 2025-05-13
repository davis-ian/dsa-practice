// Heap implementation for stufy and practice
// This class supports both min-heap and max-heap  based on the comparator function

class Heap {
    /**
     * @param {(a: any, b: any) => boolean} compareFn - Comarison function to determin heap type
     * For min-heap use (a, b) => a < b
     * For max-heap use (a, b) => a > b
     */

    constructor(compareFn) {
        this.data = [];
        this.compare = compareFn || ((a, b) => a > b) //Default: max-heap
    }

    // Get the index of the parent node
    getParentIndex(i) {
        return Math.floor((i - 1) / 2 )
    }

    // Get the index of the left child
    getLeftChildIndex(i) {
        return 2 * i + 1
    }

    // Get the index of the right child
    getRightChildIndex(i) {
        return 2 * i + 2
    }

    // Insert a new element into the heap (enqueue)
    enqueue(value) {
        this.data.push(value);
        this.heapifyUp(this.data.length - 1)
    }

    // Remove and return the root element (dequeue)
    dequeue() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return root;
    }

    // View the root element without removing it
    peek() {
        return this.data[0] ||  null;
    }

    // Bottom-up heapify, similar to python's heapq.heapify()
    buildHeap(arr) {
        this.data = [...arr];
        const startIdx = Math.floor(this.data.length / 2) - 1;

        for (let i = startIdx; i >= 0; i--){
            this.heapifyDown(i)
        }
    }

    //Move and element up the tree to resore heap  property
    heapifyUp(index) {
        let current = index;
        while(
            current > 0 &&
            this.compare(this.data[current], this.data[this.getParentIndex(current)])
        ) {
            this.swap(current, this.getParentIndex(current));
            current = this.getParentIndex(current);
        }
    }

    // Move an element down the tree to resore heap property
    heapifyDown(index) {
        const length = this.data.length;
        let smallestOrLargest = index;

        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < length && this.compare(this.data[left], this.data[smallestOrLargest]))  {
            smallestOrLargest = left
        }

        if (right < length && this.compare(this.data[right], this.data[smallestOrLargest])) {
            smallestOrLargest = right
        }

        if (smallestOrLargest !== index) {
            this.swap(index, smallestOrLargest);
            this.heapifyDown(smallestOrLargest)
        }
    }

    // Swap two elements in the array
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }

    // Print the tree structure in a readable format
    printTree(title) {
    console.log("===========================================");
    if (title) {
        console.log(title);
    }
    const arr = this.data;
    const n = arr.length;
    const levels = Math.floor(Math.log2(n)) + 1;
    const maxWidth = Math.pow(2, levels) * 2;

    let index = 0;

    for (let level = 0; level < levels; level++) {
        const levelCount = Math.pow(2, level);
        const spaceBetween = Math.floor(maxWidth / levelCount) - 1;
        const indent = Math.floor(spaceBetween / 2);

        let line = " ".repeat(indent);

        for (let i = 0; i < levelCount && index < n; i++) {
            line += String(arr[index++]).padStart(2, ' ') + " ".repeat(spaceBetween);
        }

        console.log(line.trimEnd());

        // Draw branch line for next level (except last)
        if (level < levels - 1) {
            let branchLine = "";

            for (let i = 0; i < levelCount && i + Math.pow(2, level) - 1 < n; i++) {
                branchLine += " ".repeat(indent - 1) + "/ \\" + " ".repeat(spaceBetween - 2);
            }

            console.log(branchLine.trimEnd());
        }
    }

        console.log("===========================================");
    }

}

export default Heap;





