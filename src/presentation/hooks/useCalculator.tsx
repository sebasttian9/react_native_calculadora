import { useState } from "react"

export const useCalculator = () => {
  
    const [ number, setNumber ] = useState('0');

    const builNumber = ( numberString: string ) => {

        if( number.includes('.') && numberString === '.') return;

        if( number.startsWith('0') || number.startsWith('-0')){

            if( numberString === '.'){
                return setNumber(number + numberString);
            }

        }

        // Evalua si ingresa otro 0 y no incluye punto 

        if(numberString === '0' && number.includes('.')){
            return setNumber(number + numberString);
        }

        if(numberString !=='0' && !number.includes('.')){
            return setNumber(numberString);
        }

        if(numberString === '0' && !number.includes('.')){
            return;
        }

        // setNumber (number + numberString);
    }
  
  
    return {

    // properties
    number,
    builNumber


    // Methods
   
    }
}
