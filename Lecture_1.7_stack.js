/* Лекиция 1.6 Очереди,деки и стек */

// Вставка

// class Stack{
//     constructor(){
//         this.top = null;
//     };

//     push(data) {
//         // Создатиь новый узел и добавить в него новое значения data 
//         newNode = Node(data);
//         // если ранее стек был пуст, первый элемент и будет головой (head)
//         if (this.top === null){
//             this.top = newNode
//             return
//         }
//         // если стек не пуст, то установить head в качестве парметра next нового узла
//         newNode.next = this.top
//         // записать в head новый узел
//         this.top = newNode
//     }
// };

// Выборка (pop)

// function pop(){
//     // Проверить, что стек содержит хотя бы вершину 
//     if(this.top === null){
//         // можно возвращать -1
//         return null;
//     }
//     top = this.pop;

//     if (this.top.next != null){
//         // переписать значение вершины на следующий элемент
//         this.top = this.top.next;
//     } else {
//         // если стек пуст, то установить вершину в значении None можно указать любое другое значение, которое было бы удобно в реализации
//         this.top = null;
//     }
//     // Вернуть значение , хранящиеся на верщине стека
//     return this.top.data
// }

// Реализация стека на примере простого массива 

// class Stack {
//     items = [];

//     push(value){
//         this.items.push(value);
//     }

//     pop(){
//         return this.items.pop()
//     }

//     isEmpty(){
//         return  this.items.length === 0
//     }
// }


/* Урок 1.7 решение фундаментальных задач: очереди, связнные списки, деки и стеки */

// Является ли одна строка исходной для другой 

var firsArr = [1,2,3,4];
var nextArr = [1,2,3,4,5,6,7];

function isSubsequence(a,b){
    if (typeof a === 'object' && typeof b === 'object'){
        console.log(typeof a)
        console.log(typeof b)
    } else{
        console.log('Error')
    }
}
isSubsequence(firsArr,nextArr)