function binarySearch(list: number[], target: number): number | null {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === target) {
            return mid;
        }

        if (guess > target) {
            high = mid - 1; // -1 because we know 'mid' is not the target, as it has been used.
        } else {
            low = mid + 1;
        }
    }

    return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
