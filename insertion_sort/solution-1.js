function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let curr = array[i];
      for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
          console.log(j)
          array[j + 1] = array[j];
        }
      array[j + 1] = curr;
    }
    return array;
  }

  insertionSort([1, 4, 2, 8, 345, 123]);