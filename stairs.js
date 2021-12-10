recursion = (cost, array) => {
    let current = cost
    if (array.length >= 2){
        recursion1 = recursion (current + array[0], array.slice(1));
        recursion2 = recursion(current + array[0], array.slice(2));
        if (recursion1 > recursion2){
            current = recursion2;
        }
        else{
            current = recursion1;
        }
        
    } 
    else {
        current += array[0];
    }
    return current;
}

stairs = (array)=>{
    length = array.length;
    cost = recursion(0,array);
    return cost;
}

console.log(stairs([10,15,20]));
console.log(stairs([0,2,2,1]));
console.log(stairs([0,3,3,2]));