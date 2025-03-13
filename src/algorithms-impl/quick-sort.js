var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arrayToBeSorted = [3, 1, 4, 1, 3, 2, 5, 9, 12, 10, 11, 13, 5, 6, 7, 9];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[Math.floor(Math.random() * arr.length)];
    var left = [];
    var right = [];
    var middle = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
        else {
            middle.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), middle, true), quickSort(right), true);
}
console.log(quickSort(arrayToBeSorted));
