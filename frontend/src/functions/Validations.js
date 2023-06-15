
export const emailValidationFunction = email =>{
  

     const val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if(val.test(email)){
        return true
    }else{
        return false;
    }
}


export const mobileValidationFunction = mobile =>{
    let mobileS = String(mobile);

    if(mobileS.length === 10){
        console.log('val',mobileS[0])
        if(mobileS[0]=== '0'){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

export const nicValidationFunction = nic =>{
    let nicS = String(nic);
    if(nicS.includes("v" || nicS.includes("V"))){
        if(nicS.length === 10){
            return true
        }
        else{
            return false
        }
    }else if(nicS.length ===12){ 
           return true;
    }else{
        return false }
};


export const emptyValidation = (input) => {
    return input === null || input ==="" ;
  };


  export const checkStockID = (input) => {
    if (typeof input !== 'string') {
      return false; // Input is not a string
    }
  
    if (input.length === 0) {
      return false; // Input is an empty string
    }
  
    const firstTwoChars = input.slice(0, 2);
  
    return firstTwoChars === "SL";
  };

  export const checkShopID = (input) => {
    if (typeof input !== 'string') {
      return false; // Input is not a string
    }
  
    if (input.length === 0) {
      return false; // Input is an empty string
    }
  
    const firstTwoChars = input.slice(0, 2);
  
    return firstTwoChars === "SH";
  };




export  const checkFirstTwoNumbers = (input) => {
   
  
    if (input.length < 2) {
      return false; // Input has fewer than 2 characters
    }
  
    const firstTwoChars = input.slice(0, 2);
  
    return /^\d+$/.test(firstTwoChars);
  };


console.log('etst');