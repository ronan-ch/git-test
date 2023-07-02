
function sort(buffer) {
    for(let i=0;i<buffer.length;i++){
        for(let j=i+1;j<buffer.length;j++){
            if(buffer[i]<buffer[j]){
                let tmp = buffer[i]
                buffer[i] = buffer[j]
                buffer[j] = tmp
            }
        }
    }
    return buffer
}

var sort1 = sort([8,3,4,1,2,6,7,5]);
console.log(sort1)
