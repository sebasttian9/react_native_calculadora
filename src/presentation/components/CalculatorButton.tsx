import { Pressable, Text } from "react-native"
import { colors, styles } from '../../config/theme/app-theme';


interface Props {
    label: string;
    color?: string;
    width?: number;
    blackText?: boolean;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    width = 70,
    blackText = false

}: Props) => {
  return (
    <Pressable style={({pressed}) => ({
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
