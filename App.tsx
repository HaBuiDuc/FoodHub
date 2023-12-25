import * as React from "react";

import { StyleSheet, SafeAreaView } from "react-native";
import SearchScreen from "./src/views/food_surf/SearchScreen";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1
  }
});

export default App;
