import { Pressable, Text } from "react-native"
import { colors, styles } from '../../config/theme/app-theme';


interface Props {
    label: string;
    color?: string;
    width?: number;
    blackText?: boolean;
    onPress : () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    width = 70,
    blackText = false,
    onPress

}: Props) => {
  return (
    <Pressable 
    onPress={() => onPress()}
    style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: width,
        opacity: (pressed) ? 0.7 : 1,
    })}>
        <Text style={{
            ...styles.buttonText,
            color: (blackText) ? 'black' : 'white'
            }}>{label}</Text>
    </Pressable>
  )
}
