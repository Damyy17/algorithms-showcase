
const arrayToBeSorted : number[] = [3, 1, 4, 1, 3, 2, 5, 9, 12, 10, 11, 13, 5, 6, 7, 9]

function swap (arr : number[], arri: number, arrj: number ){
    [arr[arri], arr[arrj]] = [arr[arrj], arr[arri]];
}

function bubleSort(arr: number[]){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                swap(arr, i, j);
            }
        }
    }
}

bubleSort(arrayToBeSorted);

console.log(arrayToBeSorted)