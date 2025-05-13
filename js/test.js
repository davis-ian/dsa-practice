import { selectSort } from './algorithms/sorting/selectSort.js'

const nums1 = [4, 1, 100, 512, 64, -12, 5]

console.log(selectSort(nums1), 'sorted')

// // Example usage for study
// const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];



// const minHeap = new Heap((a, b) => a < b); // true min-heap
// const maxHeap = new Heap((a, b) => a > b); // true max-heap


// minHeap.buildHeap(arr);
// maxHeap.buildHeap(arr);


// minHeap.printTree("Min Heap");
// maxHeap.printTree("Max Heap");


/**
 * Test cases:
 *
 * nums=[1,2,2,3,3,3]
 * k=2
 *
 *
 * nums=[7,7]
 * k=1
 *
 * nums=[1,1,1,2,2,3]
 * k=2
 */


// const nums1 = [1,2,2,3,3,3]
// const nums2 = [7,7]
// const nums3 = [1,1,1,2,2,3]


// const heapSol = new Solution();
// console.log(heapSol.topKFrequent(nums1, 2))
// console.log(heapSol.topKFrequent(nums2, 1))
// console.log(heapSol.topKFrequent(nums3, 2))

// const bsSol = new BucketSortSolution();
// console.log(bsSol.topKFrequent(nums1, 2))
// console.log(bsSol.topKFrequent(nums2, 1))
// console.log(bsSol.topKFrequent(nums3, 2))
