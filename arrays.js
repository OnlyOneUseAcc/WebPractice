/* Лабораторная работа №5. Задание 1 */
let arr = [];
arr.length = 10;

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(Math.random() * 10);
}

console.log(arr);

/* Лабораторная работа №5. Задание 2 */
function findMin(arr) {

    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

function findMax(arr) {

    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

function findMedian(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let min= findMin(arr);
let max = findMax(arr);
let median = findMedian(arr);

console.log(`Минимальное значение массива  = ${min}`);
console.log(`Максимальное значение массива  = ${max}`);
console.log(`Среднее значение массива  = ${median}`);

/* Лабораторная работа №5. Задание 3*/

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function partition(arr, left, right) {

    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {

        while(arr[i] < pivot) {
            i++;
        }

        while(arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(arr, left, right) {

    let index;

    if (arr.length > 1) {

        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }

        return arr;
    }
}

let result = quickSort(arr, 0, arr.length - 1);

console.log(result);