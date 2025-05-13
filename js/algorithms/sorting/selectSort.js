export function selectSort(items) {
    let sorted = [];

    let originalLength = items.length;
    for (let i = 0; i < originalLength; i++) {

        const highestIndex = findLargest(items);
        if (highestIndex != null) {
            sorted.push(items.splice(highestIndex, 1)[0])
        }
    }

    return sorted;
}

function findLargest(items) {
    if (!items.length) return null;

    let highest = items[0];
    let highestIndex = 0

    for (let i = 0; i < items.length; i++) {
        if (items[i] > highest) {
            highest = items[i];
            highestIndex = i
        }
    }

    return highestIndex;
}
