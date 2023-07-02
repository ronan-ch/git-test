
function max(buffer) {
    var max = buffer[0]
    for(var i=0;i<buffer.length;i++){
        if(buffer[i]>max){
            max = buffer[i]
        }

    }
    return max
}


var max1 = max([1,2,3,4,7]);
console.log(max1)