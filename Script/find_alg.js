
function find(buffer, target) {
    for(let i=0;i<buffer.length;i++){
        if(buffer[i] === target)
            return i
    }

}

function binary_find(buffer, target) {
    for(let i=0;i<buffer.length;i++){
        if(buffer[i] === target)
            return i
    }

}


var number = find([1,3,2,5,7,6],6);
console.log(number)