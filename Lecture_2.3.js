/* Экспоненциальный и тернарный поиск */

var newArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var target = 1;
var left = 0;
var right = newArr.length - 1;

function ternarySearchRec(data,left,right,target){

    if(right >= left){
        m1 = Math.floor(left + (right - left)/3);
        m2 = Math.floor(right - (right - left)/3);

        if(data[m1] === target){
            return m1;
        }

        if(data[m2] === target){
            return m2;
        }

        if(target < data[m1]){
            return ternarySearchRec(data, left, m1 - 1,target)
        } else if(target > data[m2]){
            return ternarySearchRec(data,m2 + 1, right, target)
        } else {
            return ternarySearchRec(data, m1 + 1, m2 - 1, target);
        }
    };
    return -1
}

// console.log(ternarySearchRec(newArr,left,right,target))

function ternarySearch(data,target){
    var left = 0;
    var right = data.length - 1;

    while (left <= right){
        var m1 = Math.floor(left + (right - left)/3);
        var m2 = Math.floor(right - (right - left)/3);

        if(data[left] === target || data[right] === target){
            return +1
        }




        if(target === data[m1]){
            console.log(`Попал в m1`)
            console.log(m2)
            return m1
        };

        if(target === data[m2]){
            console.log(`Попал в m2`)
            return m2
        };

        if(target > data[m1]){
            left = data[m1]
        };

        if(target > data[m2]){
            right = data[m2]
        };  
    };

    return -1

}
console.log(ternarySearch(newArr,target))