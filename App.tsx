
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar barStyle="light-content" backgroundColor='#0b0d14' />

      <Header></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0d14',
    paddingTop: 40,
    
  },
});
