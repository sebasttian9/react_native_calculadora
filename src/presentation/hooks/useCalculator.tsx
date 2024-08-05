import { useRef, useState, useEffect } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {
  
    const [ formula, setFormula ] = useState('');
    const [ number, setNumber ] = useState('0');
    const [ prevNumber, setPrevNumber ] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {

        if( lastOperation.current ){

            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${ firstFormulaPart} ${ lastOperation.current } ${number}`);
        }else{
            setFormula(number);
        }
        
    }, [number]);






    const clean = () => {

        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('');

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


    const CalculateResult = () => {

        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');

    }


    const calculateSubResult = (): number => {

        const [ firstValue, operation, secondValue] = formula.split(' '); 

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if(isNaN(num2)) return num1;

        switch( operation ){

            case Operator.add:
                return num1+num2;
            case Operator.subtract:
                return num1-num2;
            case Operator.multiply:
                return num1*num2;
            case Operator.divide:
                return num1/num2;
            default:
                throw new Error("Operacion not implemented");
            

        }
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
    multiplyOperation,
    CalculateResult,
    formula,


    // Methods
   
    }
}

