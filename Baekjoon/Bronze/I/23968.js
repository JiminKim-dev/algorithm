function bubbleSort(arr) {
  let count = arr.length - 1;

  while (count > 0) {
    for (let i = 0; i < count; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    count--;
  }

  return arr
}