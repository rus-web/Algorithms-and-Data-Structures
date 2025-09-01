/* Лекиция 1.6 Очереди,деки и стек */

// Стек 

class Stack {
    constructor(){
        this.stack = [];
    }

    // Кладем в вершину стека
    push(item){
        this.stack.push(item);
        return this
    };

    // Снимаем верхний элемент
    pop(){
        if(this.stack.length === 0){
            return false 
        } else {
            return this.stack.pop();
        }
       
    }

}

const stack = new Stack();

// Очередь

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
        if(this.queue.length === 0){
            return false
        } else{
            return this.queue.shift()
        }
    };
}

const queue = new Queue();

console.log(queue.enqueue('Hello'))
console.log(queue.enqueue('World'))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())


// Связный список

class LinkedListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }

    toString(){
        return this.value;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new LinkedListNode(value);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode;

            return this
        }

        this.tail.next = newNode;

        this.tail = newNode;

        return this
    };

    prepenf(value){
        const newNode = new LinkedListNode(value, this.head)

        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }

        return this
    }

    toArray(){
        const nodes = [];
        let currentNode = this.head;

        while(currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes
    }

    toString(){
        return this.toArray().map(node => node.toString()).toString();
    }
};

const list = new LinkedList();

list.append('a').append('b').append('c').append('d')

console.log(list.toString())


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
