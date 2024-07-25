import { useState } from "react"

export const useCalculator = () => {
  
    const [ number, setNumber ] = useState('0');

    const clean = () => {

    }

    const deleteOperation = () => {
        
    }

    const builNumber = ( numberString: string ) => {

        console.log(numberString);
        console.log(number)

        if( number.includes('.') && numberString === '.') return;

        if( number.startsWith('0') || number.startsWith('-0')){

            // solo podemos tener un punto decimal
            if( numberString === '.'){
                return setNumber(number + numberString);
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


        setNumber (number + numberString);

        }else{

            return setNumber(number + numberString);
        }
    }
  
  
    return {

    // properties
    number,
    builNumber


    // Methods
   
    }
}

