
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
        }else{
            return false
        }
    }else{
        return false;
    }
}


console.log('etst')