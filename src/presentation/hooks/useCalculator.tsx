import { useRef, useState } from "react"

enum Operator {
    add,
    subtract,
    multiply,
    divide,
}

export const useCalculator = () => {
  
    const [ number, setNumber ] = useState('0');
    const [ prevNumber, setPrevNumber ] = useState('0');

    const lastOperation = useRef<Operator>();

    const clean = () => {

        setNumber('0');
        setPrevNumber('0');

    }

    const deleteOperation = () => {


        if(number.length==1){
            return setNumber('0');
        }

        if(number.length==2 && number.includes('-')){
            return setNumber('0');   
        }
        
        let str = number;
        str = str.slice(0, -1); 
        setNumber(str);
        
    }

    const toggleSing = () =>{

        if(number.includes('-')){
            return setNumber(number.replace('-',''));
        }

        setNumber('-'+ number);
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


    const setLastNumber = () => {

        if(number.endsWith('.')){
            setPrevNumber( number.slice(0,-1));
        }else{
            setPrevNumber( number );
        }

        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }
  
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const subtracOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
  
    return {

    // properties
    number,
    builNumber,
    prevNumber,
    clean,
    deleteOperation,
    toggleSing,
    divideOperation,
    addOperation,
    subtracOperation,
    multiplyOperation


    // Methods
   
    }
}

