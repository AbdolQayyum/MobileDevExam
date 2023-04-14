import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import axios from 'axios';

export default function CustomFlatList(props){

    const[state,setState] = useState(props.products)

    return(
        <View>

           <View>

        {/* <Text style = {{textAlign:'center',fontSize:50,backgroundColor:'darkgrey',fontWeight:'bold'}}>Products List</Text> */}

     </View>
  
        <FlatList
          data={props.products}
          renderItem={({item}) => 
            (
              
                 <View style={{flex:1,padding:3,flexDirection:'row-reverse'}}>

             <View style ={{flex:0.2,backgroundColor:'white'}}>

              <Image source = {{uri:item.image}} style = {{width :70,height:100}} />

             </View>
            
              <View style={{ flex:0.8,backgroundColor:'lightgrey',borderBottomColor:'black'}}>

                 <Text style = {{fontSize:10}}> {item.id}. </Text>

                 <Text style = {{fontStyle:'italic',fontSize:15}}> {item.category} </Text>

                 <Text style = {{fontSize:10}}> {item.title} </Text>

                 <Text style = {{fontSize:10}}> {item.description} </Text>

                 <Text style = {{textAlign:'left',paddingStart:240}}> $ {item.price} </Text>
                
              </View>

              </View>
  
            )
          }
          keyExtractor={item => item.id}
        /> 
  
       </View>
       
      
        
        )
}





export {CustomFlatList};

