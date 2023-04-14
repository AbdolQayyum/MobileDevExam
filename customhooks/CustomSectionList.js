import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SectionList } from 'react-native';

export default function CustomSectionList(props) {

    const[state,setState] = useState(props.products1)


  return (
     
              <SectionList
                sections={state}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <View style={{flex:1, height:30, backgroundColor:'white'}}>
                    <Text style={{backgroundColor:'grey', color:'white', fontSize:18}}>{item.title}</Text>
                  </View>
                )}
                renderSectionHeader={({section: {title}}) => (

                <View style={{flex:1,height:30, marginBottom:10, backgroundColor:'green'}}>
                  <Text style={{backgroundColor:'green', color:'white', fontSize:22}}>{title}</Text>
                </View>

                )}
              />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export {SectionList}