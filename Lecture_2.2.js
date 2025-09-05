/* 2.2 Решение фундаментальных задач по бинарному поиску */

// Поиск корян числа

var newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var target = 16

function binarySearchSqrt(target){
    left = 0;
    right = target;

    while (left <= right){
        middle = Math.floor((left + right)/2);

        if (middle ** 2 > target){
            right = middle - 1;
            continue
        };

        if (middle ** 2 < target){
            left = middle + 1;
            continue
        };
        return middle
    }

    return right
}

// console.log(binarySearchSqrt(15))

// Задача дипломы 

function binarySearch(w,h,n){
    left = Math.max(w,h)
    right = left * n;

    while(left + 1 < right){
        middle = (right + left)/2;
        res = (middle / w) * (middle / h);
        if(res < n){
            left = middle;
        } else {
            right = middle;
        };    
    }
    return right
}

// console.log(binarySearch(1,3,9))

// Очень легкая задача 

function copyTime(n,x,y){
    left = 0;
    right = (n-1) * Math.max(x,y);

    while (left + 1 < right){
        middle = (right + left)/2;
        if (middle/x + middle/y < n - 1){
            left = middle;
        } else {
            right = middle;
        }
    };

    return right + Math.min(x,y)
}

console.log(copyTime(250,3,5))

