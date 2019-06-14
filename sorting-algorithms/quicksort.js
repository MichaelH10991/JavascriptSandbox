/* low  --> Starting index,  high  --> Ending index */
// quickSort(arr[], low, high)
// {
//     if (low < high)
//     {
//         /* pi is partitioning index, arr[pi] is now
//            at right place */
//         pi = partition(arr, low, high);

//         quickSort(arr, low, pi - 1);  // Before pi
//         quickSort(arr, pi + 1, high); // After pi
//     }
// }

// 1. x of array as pivot,
// 2. put x at its correct position in sorted array
// 3. put all smaller elements (smaller than x) before x,
// 4. put all greater elements ( x) after x.
// All this should be done in linear time.

arr = [1, 54, 7, 453, 9, 23]

function quicksort(arr, start, end) {
  if (start < end) {
    pi = partition(arr, start, end)

    quicksort(arr, start, pi - 1) // Before pi
    quicksort(arr, pi + 1, end) // After pi
  }
}

function partition(arr, start, end) {
  // here we are picking our pivot to be the end of the array (the higher number)
  let pivot = arr[end]
  // index of starting number
  let i = start - 1

  // loop over partition
  for (let j = low; i < high; j++) {
    if(arr[j] < pivot){
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    }
    
}

quicksort(arr, arr[0], arr[arr.length - 1])

console.log(arr)
