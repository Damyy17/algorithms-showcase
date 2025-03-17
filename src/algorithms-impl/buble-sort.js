var arrayToBeSorted = [3, 1, 4, 1, 3, 2, 5, 9, 12, 10, 11, 13, 5, 6, 7, 9];
function swap(arr, arri, arrj) {
    var _a;
    _a = [arr[arrj], arr[arri]], arr[arri] = _a[0], arr[arrj] = _a[1];
}
function bubleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                swap(arr, i, j);
            }
        }
    }
}
bubleSort(arrayToBeSorted);
console.log(arrayToBeSorted);
