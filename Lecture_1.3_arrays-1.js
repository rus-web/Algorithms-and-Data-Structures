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

// var N = 6;
// var gradeArr = [0,0,6,0,9,8];

//1.3.1
// function moveGrade(N,arr){
//     let notZero = 0;

//     for (let i = 0; i < N; i++){
//         if(arr[i] !== 0){
//             arr[notZero] = arr[i];
//             notZero++
//         }
//     };

//     for (let i = notZero; i < N; i++){
//         arr[i] = 0;
//     };

//     return arr;

// }
// console.log(moveGrade(N,gradeArr))

// 1.3.2

/* Учёные провели ряд экспериментов, но из-за неисправности оборудования некоторые результаты оказались ошибочными. 
Ошибочные результаты представлены числом element. Ваша задача — удалить все вхождения числа element из массива, сохранив порядок остальных чисел.*/

// var n = 7;
// var gradeArr = [1,2,-1,4,5,-1,6,-1];
// var element = -1;

// const filter = gradeArr.filter((grade) => grade !== element)
// console.log(filter)

/* Лекиця 1.4 Массивы часть 2*/

// var arr1 = [1,4,6,8,11,120,154,1324]
// var arr2 = [2,5,7,10,150,156,15678]

// function mergeSortedArrays(arr1,arr2){
//     mergeArray = [];
//     i = 0;
//     j = 0;
//     while(i < arr1.length || j < arr2.length ){
//         if (arr1[i] < arr2[j]){
//             mergeArray.push(arr1[i])
//             i++;
//         } else {
//             mergeArray.push(arr2[j])
//             j++
//         }
            
//     }
//     return mergeArray
// }

// console.log(mergeSortedArrays(arr1,arr2))
