
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

    <View style={styles.containerCategory}>
      <CategoryButton title="Todos" selected={true} />
      <CategoryButton title="Ação" selected={false} />
    </View>

    <View style={styles.sectionMovies}>
      <View style={styles.sectionTitleRow}>
        <View style={styles.accentBar}></View>
        <Text style={styles.sectionTitle}>Filmes em destaques</Text>
      </View> 

      <View style={styles.countbadge}>
        <Text style={styles.countTitle}>6 filmes</Text>  
      </View> 
    </View>  
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0d14',
    paddingTop: 40,
  },
  containerCategory:{
    flexDirection: "row",
    gap: 10,
    marginLeft: 20,
  },
  sectionMovies:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBlock: 20,
  },
  sectionTitleRow:{
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  accentBar:{
    height: 18,
    width: 4,
    backgroundColor:"#ff3366",
    borderRadius: 2,
  },
  sectionTitle:{
    fontSize: 20,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.3
  },
  countbadge:{
    backgroundColor:"#161a28",
    borderWidth: 1,
    borderColor: "#262d42",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  countTitle:{
    fontSize: 12,
    fontWeight: "700",
    color: "#94a3b8"
  },

});
