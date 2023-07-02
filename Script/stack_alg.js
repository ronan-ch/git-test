
class Stack {
    constructor(size) {
        this.buffer = new Array(10)
        this.top = 0
    }

    push(element){
        let len = this.buffer.length
        if(this.top>len){
            this.buffer = new Array(2*len)
        }
        this.buffer[this.top] = element
        this.top++
    }

    pop(){
        this.top--
        return this.buffer[this.top]
    }

}

var stack = new Stack(10);
stack.push(1)
stack.push(3)
console.log(stack.pop())
