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

console.log(binarySearchSqrt(15))
