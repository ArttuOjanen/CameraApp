import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CamComponent from './Screens.js/Camera';
import CaptureImg from './components/CaptureImg';

export default function App() {
  return (
    <View style={styles.container}>
      <CamComponent/>
      
      <StatusBar style="auto" />
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
});
