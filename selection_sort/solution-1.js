function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    swap(i, min, array);
  }
  return array;
}

// Selection Sort is one of the easier sorting algorithm to understand and implement.
// This algorithm splits the array in two parts:
// Sorted
// Unsorted
// The Sorted part is at the beginning of the array and Unsorted part afterwards.
// Each pass, initially we assume the first element to be the smallest then we loop through the whole array and select the smallest element. At the end of the pass we swap smallest element to the sorted array.
// It has O(n2) time complexity.
