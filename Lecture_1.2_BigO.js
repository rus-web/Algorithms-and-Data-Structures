
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


