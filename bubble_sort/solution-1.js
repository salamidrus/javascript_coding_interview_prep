function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // -i because the largest element will be bubbled at the end so we don't have to compare.
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}

// Problem Explanation
// Bubble Sort is a sorting algorithm which sorts or bubbles the largest number as last element at the end of each pass.
// We compare each element to the one ahead of it, if the element before is smaller, we swap their places.
// Bubble Sort’s time complexity is O(n2).
// It’s a stable algorithm.
