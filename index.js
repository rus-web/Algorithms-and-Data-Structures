

// /* Лекиця 1.2 Сложность алгоритмов*/


// // Линейная сложность O(n) //
// function foo1(n){
//     result = 0;
//     for (i = 0; i <= n; i++){
//         result += i
//     }
//     return result
// }
// // console.log(foo(10))

// // Константная сложность O(1) //
// function foo2(n){
//     return 100*n+n**2
// }
// // console.log(foo2(2)) //

// // Квадратичная сложность O(n**2) //
// function foo3(n){
//     result = 0 
//     for(i = 0; i <= n; i++){
//         for(j = 0; j <= n; j++){
//             result += i*j
//         }
//     }
//     return result
// }
// // console.log(foo3(3))

// // Экспонициальная сложность O(2**n) //

// // Алгоритм поиска числа Фибонначи 

// // Рекурсивный подход 
// function fib1(n){
//     if (n <= 1) {
//         return n
//     }
//     return fib1(n-1) + fib1(n-2)
// }
// // console.log(fib1(10))

// // Итерационный подход
// function fib2(n){
//     if (n <= 1){
//         return n
//     };

//     f1= 0;
//     f2 = 1;

//     for (i = 2; i <=n; i++){
//         temp = f1+ f2;
//         f1=f2;
//         f2= temp
//     };

//     return f2;
// }
// // console.log(fib2(10))

// // Пример сортировки пузырьком 

// var arr = [25,70,10,15,18]
// function bubbleSort(arr){
//     let n = arr.length - 1;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n - i; j++){
//             if(arr[j] > arr[j+1]){
//                 // Меняем элементы местами
//                 tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp
//             }
//         }
//     }
//     return arr;
// }
// // console.log(bubbleSort(arr))
 
// // Пример алгоритма сортировки O(n)
// const arr = [36,18,9,11,8]
// for (let i =0; i < arr.length-1; i++){
//     setTimeout(
//         () => {console.log(arr[i])},
//         arr[i]
//     )
// };

/* Лекиця 1.3 Массивы часть 1*/

// задача на два указателя 

// var arr = [1,2,3,4,5,6,7,8,9,10];
// var sum = 10;

// function twoPointers(sum,arr){
//     left = 0;
//     right = arr.length - 1;
//     while (left !=right){
//         tmp = arr[left] + arr[right];
//         if(tmp ==sum){
//             return [arr[left],arr[right]];
//         }
//         if(tmp < sum){
//             left++;
//             continue
//         }
//         right --;
//     }
//     return null
// }

// console.log(twoPointers(sum,arr))

// Задача на разворот массива

// const arr = [1,2,3,4,5,6,7,8,9];

// function reverseArray(arr){
//     left = 0;
//     right = arr.length - 1;

//     while (left < right){
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;

//         left++;
//         right--;
//     }
//     return arr
// }
// console.log(reverseArray(arr))

// Домашние задание 

// Задача 1.3.1

/* В школе прошёл экзамен по математике. Некоторые ученики списали решения, были замечены и получили 0 баллов. Помогите учителю пересортировать оценки учеников. 
Все оценки, равные 0, должны быть перемещены в конец списка, при этом порядок остальных оценок должен остаться неизменным. */

var N = 6;
var gradeArr = [0,0,6,0,9,8];

//1.3.1
function moveGrade(N,arr){
    let notZero = 0;

    for (let i = 0; i < N; i++){
        if(arr[i] !== 0){
            arr[notZero] = arr[i];
            notZero++
        }
    };

    for (let i = notZero; i < N; i++){
        arr[i] = 0;
    };

    return arr;

}
// console.log(moveGrade(N,gradeArr))

// 1.3.2

/* Учёные провели ряд экспериментов, но из-за неисправности оборудования некоторые результаты оказались ошибочными. 
Ошибочные результаты представлены числом element. Ваша задача — удалить все вхождения числа element из массива, сохранив порядок остальных чисел.*/

var n = 7;
var gradeArr = [1,2,-1,4,5,-1,6,-1];
var element = -1;

const filter = gradeArr.filter((grade) => grade !== element)
console.log(filter)


/* Лекиця 1.4 Массивы часть 1*/