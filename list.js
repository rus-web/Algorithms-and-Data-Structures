/* Лекиця 1.5 Списки*/
// Вставка в начало списка
// function addNewHead(linkedList,el){
//     node = {
//         data: el,
//         next: null
//     };

//     // если список был пуст
//     if(head == null){
//         linkedList.tail = node;
//     } else {
//         // прежний head сдвигаем на одни узел назад
//         // созданный узел в качестве next ссылается на head
//         node.next = head;
//     }

//     // устанавливаем новый узел в качестве головы списка 
//     linkedList.head = node;
// }

// Задача 1.5
/* Дан отсортированный массив положительных целых чисел. 
Необходимо найти такую пару соседних элементов, у которых абсолютная разница минимальна.*/

// var N = 4;
// var newArr = [1]

// function numberDifference (newArr){
//     if (newArr.length < 2){
//         console.log('Нет данных для отображения')
//     }
//     var left = 0;
//     var right = 1;
//     var minScore = newArr[right] - newArr[left];
//     var finishArr = [];

//     for (let i = 0; i < newArr.length - 1; i++){
//         const score = newArr[right] - newArr[left]
    
//         if(minScore > score){
//             minScore = newArr[right] - newArr[left];
//             finishArr[newArr[left], newArr[right]]
//         } else if(minScore === score){
//             finishArr.push(newArr[left], newArr[right])
//         }

//         left++;
//         right++;
//     };
//     return finishArr
// }

// console.log(numberDifference(newArr))