
const arrayToBeSorted : number[] = [3, 1, 4, 1, 3, 2, 5, 9, 12, 10, 11, 13, 5, 6, 7, 9]

function quickSort(arr: number[]) : number[]{

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(Math.random() * arr.length)]
    const left: number[] = [];
    const right: number[] = [];
    const middle: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        } else if (arr[i] > pivot){
            right.push(arr[i]);
        } else {
            middle.push(arr[i]);
        }
    }

    return[...quickSort(left), ...middle, ...quickSort(right)]
}

console.log(quickSort(arrayToBeSorted));
