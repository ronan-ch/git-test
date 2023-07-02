
class Stack {
    constructor(size) {
        this.buffer = new Array(10)
        this.top = 0
    }

    push(element){
        let len = this.buffer.length
        if(this.top>len-1){
            let tmpBuf = this.buffer
            this.buffer = new Array(2*len)
            for(let i=0;i<tmpBuf.length;i++) this.buffer[i] = tmpBuf[i]
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
for(let k=0;k<10;k++)
    stack.push(k)
stack.push(11)
console.log(stack.pop())
