// Implementation of Stack  using Array

class Stack {
    constructor(){
        this.items =[];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length == 0){
            return 'Underflow'
        }else{
            this.items.pop();
        }
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printStack(){
        let result = '';
        for(let i=0; i< this.items.length;i++){
            result += this.items[i] + " ";
        }
        return result;
    }
}

var stack  = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
