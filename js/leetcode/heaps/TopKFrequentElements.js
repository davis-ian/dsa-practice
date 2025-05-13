import Heap from '../../data-structures/heap.js'

class HeapSolution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // Create frequency map
        let freqMap = new Map();
        nums.forEach(val => {
            if (!freqMap.has(val)) {
                freqMap.set(val, 1)
            } else {
                freqMap.set(val, freqMap.get(val) + 1)
            }
        })

        // Build a max heap using [freq, value] tuples
        let maxHeap = new Heap((a, b) => a[0] > b[0]) // compare  frequencies
        for (const [val, freq] of freqMap.entries()) {
            maxHeap.enqueue([freq, val])
        }

        // Extract top K
        const result = [];
        for (let i = 0; i < k; i++) {
            const [_, val] = maxHeap.dequeue(); // ignore  frequency
            result.push(val)
        }

        return result;
    }
}

class BucketSortSolution {
    topKFrequent(nums, k) {

        //Create  freq map
        let map = new Map();
        for (const num of nums) {

            if (!map.has(num)) {
                map.set(num, 1)
            } else {
                map.set(num, map.get(num) + 1)
            }
        }

        // Bucket sort
        let buckets = [];
        for (const [num, count] of map.entries()) {

            if (!buckets[count]) {
                buckets[count] = []
            }

            buckets[count].push(num)
        }

        // Return  result
        let result = []
        for (let i = buckets.length - 1; i >= 0; i--) {
            let values = buckets[i];

            for (let j = 0; j < values.length; j++) {
                result.push(values[j])
                if (result.length === k) {
                    return  result;
                }
            }
        }
    }
}


