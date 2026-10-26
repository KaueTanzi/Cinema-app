
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/searchBar';
import CategoryButton from './components/CategoryButton';


export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar barStyle="light-content" backgroundColor='#0b0d14' />

    <Header/>
    <SearchBar/>
    <CategoryButton/>
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
