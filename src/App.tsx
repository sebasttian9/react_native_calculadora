

import {
  StatusBar,
  View,
} from 'react-native';

import { CalculatorScreen } from './presentation/screen/CalculatorScreen';
import { styles } from './config/theme/app-theme';



function App(){
  


  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
    {/* <Text>Hola Mundo</Text> */}
    <CalculatorScreen />
    </View>
  );
}



export default App;
