// Write a function that takes in a donor's and receiver's blood types as strings 
// returns whether or not the donor can safely give blood to the receiver, according to the rules above.

function compatibility(donor, receiver){
   if (donor === "O-"){
        console.log("True") ;
    } 
    // split string into array of characters
    donor = donor.split("");
    console.log(donor); // test 
    receiver = receiver.split("");
    console.log(receiver); //test 

    // declaring antigen variables A, B , Rh => presence in reciever 
    let A = false ;
    let B = false ;
    let Rh = false;

    // declaring antigen variables in donor 
    let a = false;
    let b = false;
    let rh = false;


    // iterating through the donor array to find which antigens are present 
    for(let i = 0; i < donor.length; i ++){
        
        if (donor[i] === "A"){
            // update antigen variables in donor 
            a = true;
            // check if reciver has "A"
            A = receiver.includes("A"); //test 
            
        }

        if (donor[i] === "B"){
            // update antigen variables in donor 
            b = true;
           
            // check if reciver has "B"
            B = receiver.includes("B"); //test 
        }

        if (donor[i] === "+"){
            // update antigen variables in donor 
            rh = true;
            // check if reciver has "rh"
            Rh = receiver.includes("+"); //test
            
        }
    }
    
    // checking the antigen variables for all combinations -> starting with the most antigens 
    // A B +
    if (a && b && rh){
        // check if reciever has antigen AB +
        if (A && B && Rh){
            console.log("compatible A&&B&&Rh ");
        }
        else{
            console.log("incompatible")
        }
        
    }
    // A && + 
    else if (a && rh){
        if (A && Rh){
            console.log("compatible A&&Rh");
        }
        else {
            console.log("incompatible")
        }
    }
    // B && +
    else if (b && rh){
        if (B && Rh){
            console.log("compatible B&&Rh");
        }
        else {
            console.log("incompatible")
        }
    }
    // A && B antigen
    else if (a&&b){
        if (B && A){
            console.log("compatible A&&B");
        }
        else{
            console.log("incompatible")
        }
    }
    // A antigen
    else if (a){
        if (A){
            console.log("compatible single"); 
        }
        else{
            console.log("incompatible")
        }
    }
    // B antigen
    else if (b){
        if (B){
            console.log("compatible single"); 
        }
        else{
            console.log("incompatible")
        }
    } 
    // +
    else if (rh){
        if (Rh){
            console.log("compatible single"); 
        }
        else{
            console.log("incompatible")
        }
    }    
    // O+
    else if (A === false && B === false && Rh === false){
        console.log("compatible");
    }
    else {
        console.log("incompatible");
    }


}

let donor = "AB+"
let receiver = "A+"
compatibility(donor,receiver)




