/* #1 Given an array. Write a recursive function that removes the first element and returns
the given array. (without using arr.unshift(),assign second element to first, third element
to second...) */

function removeFirstEl(arr, arr1 = []) {
    if (arr1.length === arr.length - 1) {
        return arr1;
    }
    arr1.push(arr[arr1.length + 1])
    return removeFirstEl(arr, arr1)
}
removeFirstEl([])


/* #2 Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.*/

// Not completed
function objSwap(obj) {
    let obj1 = {};
    //let arr = [];

    for (let key in obj) {
        obj1[obj[key]] = key;
    }
    return obj1
}
objSwap({})


/* #3 Given the list of the following readers:
Output the books sorted by the percent in descending order which readStatus is true. */

let books = [
    { book: "Catcher in the Rye&quot", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 }
];

let result = books.filter((v) => (v.readStatus === true) ? v.readStatus : 0).sort((a, b) => (a.percent > b.percent) ? -1 : 1);
console.log(result)


/* #4 Given an array and a number N.  Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift()) */

function rotateArr(arr, number) {
    if (number === 0) {
        return arr;
    }
    if (number < 0) {
        number += 1;
        arr.unshift(arr.pop())
    }
    if (number > 0) {
        number -= 1;
        arr.push(arr.shift())
    }
    return rotateArr(arr, number)
}

rotateArr([], number)


/* #5 Create a function that builds a tree like object given an array with object which
contains parent and id properties. */





