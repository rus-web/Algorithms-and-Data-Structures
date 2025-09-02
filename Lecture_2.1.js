/* Бинарный поиск и его вариации */


// Линейный поиск
var newArr = [1,2,3,4,5,6,7];

function line(arr,target){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return null;
}

// console.log(line(newArr,10))

// Бинарный поиск 
var newArr1 = [1,2,3,4,5,6,7,8,9,14,17]

function binarySearch(data, target){
    left = 0;
    right = data.length - 1;

    if(target < data[left] || target > data[right]){
        return -1
    };

    while (left <= right){
        middle = (left +right)/2;

        if(target === data[middle]){
            return middle
        };

        if(target < data[middle]){
            right = middle - 1;
        } else{
            left = middle + 1;
        }               
    };

    return -1;

}

// console.log(binarySearch(newArr1,9))

// Левый и правый бинарные поиски

var newArr2 = [1,2,9,4,4,5,9,4,5,4,6,7,9]
var target = 9

// Левый 

function leftBinary(data, target){
    var left = 0;
    var right = data.length - 1;

    while(left + 1 < right){
        var middle = Math.floor((left + right)/2);

        if(data[middle] < target){
            left = middle;
        } else {
            right = middle;
        };
    };

    if(data[left] === target){
        return left;
    };

    if(data[right] === target){
        return right;
    }

    return -1;

}

// console.log(leftBinary(newArr2,target))

// Правый 

function rightBinary(data, target){
    var left = 0;
    var right = data.length - 1;

    while (left + 1 < right){
        var middle = Math.floor((left + right)/2);
        
        if(data[middle] <= target){
            left = middle;
        } else {
            right = middle;
        };
    }

    if(data[right] === target){
        return right
    };

    if(data[left] === target){
        return left
    };

    return -1
}

console.log(rightBinary(newArr2, target))