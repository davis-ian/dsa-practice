export function quicksort(arr) {

    // if array length < 2, no need to sort, return array
    if (arr.length < 2) return  arr;

    // if length == 2
        //if first el > second el, swap
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            [arr[0], arr[1]] = [arr[1], arr[0]]
        }
        return arr;
    }

    if (arr.length >  2) {
        // pick a pivot
        let pivotIndex = Math.round(arr.length / 2);
        let pivot = arr[pivotIndex];

        // find elements smaller & larger than the pivot (partitioning)
        let left = [];
        let right =  [];

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) continue;

            if (arr[i] <= pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        // call  quicksort recursively on the two  sub-arrays
        return quicksort(left).concat(pivot, quicksort(right))
    }
}

