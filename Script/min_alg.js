
function min(buffer) {
    var min = buffer[0]
    for(var i=0;i<buffer.length;i++){
        if(buffer[i]<min){
            min = buffer[i]
        }

    }
    return {val:min,index:i}
}

var min1 = min([1,2,3,4,7]);
console.log(min1.index,min1.val)