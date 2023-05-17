import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

function SearchScreen() {
  return (
    <View style={styles.page}>
      <TextInput
        style={{color: 'white', backgroundColor: 'white'}}
        // value={text}
        // onChangeText={handleChangeText}
        placeholder="github user name ..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
    height: '100%',
    flex: 1,
    // alignSelf: 'center'
    
  },
  text: {
    color: 'white'
  }
})

export default SearchScreen;
