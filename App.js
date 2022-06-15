import { StyleSheet, Text, View } from 'react-native';
import { Activityindi } from './Components/ActivityIndi';
import { RNBottomSheet } from './Components/RNBottomSheet';
import { RNSwitch } from './Components/RNSwitch';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Activityindi /> */}
        {/* <RNSwitch /> */}

        <RNBottomSheet />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:32,
    fontWeight:"bold"

  }
});
