/* Решение фундаментальный задач: очереди, связнные списки, деки и стеки */

// Является ли одна строка исходной для другой - Метод Очередь 

var a = ["a","b","d",];
var b = ["u","a","b","q","d"]

class Queue{
    constructor(){
        this.queue = [];
    };

    // Добавляем элемент в очередь
    enqueue(data){
        this.queue.push(data)
        return this
    };

    // Удаляем первый элемент из очереди
    dequeue(){
        if(this.getSize() === 0){
            return false
        } else{
            return this.queue.shift()
        }
    };

    // Указатель на первый элемент очереди
    peek(){
        if(this.getSize() === 0){
            return false
        } else{
            return this.queue[0]
        }
    };

    // указатель размера списка
    getSize(){
        return this.queue.length
    }
};

const queue = new Queue()


function isSubsequence(a,b){
    for (let i = 0; i < a.length; i++){
        queue.enqueue(a[i]);
    }

    for(let i = 0; i < b.length; i++){
        if(queue.peek() === b[i]){
            queue.dequeue()
        }
    }
    console.log(queue.getSize())
};

// isSubsequence(a,b)

/* задача 1.7 */
/*На складе хранятся контейнеры с товарами, каждому из которых присвоен номер. Чётный номер означает, что контейнер прошёл проверку качества. 
Ваша задача — найти номер последнего проверенного контейнера (последнего чётного числа в массиве). Если в массиве нет чётных чисел, вернуть -1. */

class Stack{
    constructor(){
        this.stack = [];
    }

    // Добавляем новый элемент
    push(value){
        this.stack.push(value)
        return this
    };

    // снимаем последний элемент
    pop(){
        if(this.stack.length === 0){
            return -1
        } else{
            return this.stack.pop()
        }    
    };
};

const stack = new Stack();

var N = 9;
var newArr = [7,3,5,1,7,12,13,19,21,14]

const isEven = nubber => nubber % 2 === 0;

function bestEvenNumber(arr){

    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            stack.push(arr[i])
        };
    };

    return stack.pop();
 
}

// console.log(bestEvenNumber(newArr))