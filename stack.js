
/* Урок 1.7 решение фундаментальных задач: очереди, связнные списки, деки и стеки */

// Является ли одна строка исходной для другой 

// Метод Очередь 

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

const queue = new Queue();

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

// isSubsequence(a,b);


var firsArr = ['a','b','c','d'];
var nextArr = ['a','f','b','c','d'];

// Два указателя
function isSubsequence(a,b){
    var i = 0;
    var j = 0;

    while(i < a.length && j < b.length){
        if (a[i] == b[j]){
            i++
        }
        j++
    }

    console.log(i === a.length)
}
 
// isSubsequence(firsArr,nextArr)

// Является ли слово палиндромом

// Вариант с использованием двух указателей
var string = "level";
var string1 = "Hello world"

function palindrome(string){
    var i = 0;
    var j = string.length-1;

    while(i < j){
        if(string[i] !== string[j]){
            console.log('Не полидром')
            return false
        }
        i++;
        j--;
    }

    console.log(`Полидром`)
    return true
}

// palindrome(string)
// palindrome(string1)

// Вариант с использованием стека 

class Stack {
    constructor(){
        this.stack = [];
    };

    push(item){
        this.stack.push(item);
    };

    pop(){
        return this.stack.pop();
    };
}

const stack = new Stack();
var s = 'level'
var c = 'stack'

function isPalindrome(s){
    const stack = new Stack();

    for (let i = 0; i < s.length; i++){
        stack.push(s[i])
    };

    for (let i = 0; i < s.length; i++){
        if(s[i] !== stack.pop()){
            return false;
        }
    }
    return true;
}
// console.log(isPalindrome(s))
// console.log(isPalindrome(c))
