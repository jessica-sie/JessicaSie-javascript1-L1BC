// prompts user for number of characters of the message 
let count = prompt("number of characters: ");

// prompts user for array of integers to decode
msgArr = [];
for (let i = 0; i < count; i++){
    let message = prompt("message integer: ");
    msgArr.push(message);

}

// prompts use for a positive integer (key)
let key = 0;
while (key <= 0 ){
    console.log("enter key that is a positive integer");
    key = prompt("key: ");
}

// function takes two arguments: a positive integer and an array of integers 
// returns a decoded message as string.

// digitalDecipher() function
function digitalDecipher(msgArr, key){
    
}


