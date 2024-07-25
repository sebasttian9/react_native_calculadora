import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator  } from '../hooks/useCalculator';

export const CalculatorScreen = () => {


    const { number, builNumber  } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>

        <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text 
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.mainResult}>{ number }

        </Text>
        <Text style={styles.subResult}>15</Text>
        </View>

        <View style={styles.row}>

            <CalculatorButton onPress = { ()=> console.log('C') } label="C" color={colors.lightGray} blackText/>
            <CalculatorButton onPress = { ()=> console.log('+/-') } label="+/-" color={colors.lightGray} blackText/>
            <CalculatorButton onPress = { ()=> console.log('Del') } label="Del" color={colors.lightGray} blackText/>
            <CalculatorButton onPress = { ()=> console.log('÷') } label="÷" color={colors.orange}/>

        </View>

        <View style={styles.row}>

        <CalculatorButton onPress = { ()=> builNumber('7') } label="7" />
        <CalculatorButton onPress = { ()=> builNumber('8') } label="8" />
        <CalculatorButton onPress = { ()=> builNumber('9') } label="9" />
        <CalculatorButton onPress = { ()=> console.log('X') } label="X" color={colors.orange}/>

        </View>

        <View style={styles.row}>

            <CalculatorButton onPress = { ()=> builNumber('4') } label="4" />
            <CalculatorButton onPress = { ()=> builNumber('5') } label="5" />
            <CalculatorButton onPress = { ()=> builNumber('6') } label="6" />
            <CalculatorButton onPress = { ()=> console.log('-') } label="-" color={colors.orange}/>

        </View>


        <View style={styles.row}>

            <CalculatorButton onPress = { ()=> builNumber('1') } label="1" />
            <CalculatorButton onPress = { ()=> builNumber('2') } label="2" />
            <CalculatorButton onPress = { ()=> builNumber('3') } label="3" />
            <CalculatorButton onPress = { ()=> console.log('+') } label="+" color={colors.orange}/>

        </View>

        <View style={styles.row}>

            <CalculatorButton onPress = { ()=> builNumber('0') } label="0" width={150}/>
            <CalculatorButton onPress = { ()=> builNumber('.') } label="." />            
            <CalculatorButton onPress = { ()=> console.log('=') } label="=" color={colors.orange}/>

        </View>
        
                        

    </View>
  )
}
