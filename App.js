import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SectionList,FlatList ,Image,TouchableOpacity} from 'react-native';
import { useState,useEffect} from 'react';
import axios from 'axios';
import GetApiCustomHook from './customhooks/GetApiCustomHook';
import CustomFlatList from './customhooks/CustomFlatList';
import CustomSectionList from './customhooks/CustomSectionList';
//import CustomSectionList from './customhooks/CustomSectionList';


const DATA=
  [
  {
    key:0,
    title:'Starters',
    data:[{key:0, title:'Salad'},{key:1, title:'Soup'}, {key:2, title:'Fish Cracker'}]
  },

  {
    key:1,
    title:'Dessi Food',
    data:[{key:0, title:'Karahi'}, {key:1, title:'Kabab'}]
  },

  {
    key:2,
    title:'Fast Food',
    data:[{key:0, title:'Burger'},{key:1, title:'Pizza'},{key:2, title:'Paasta'}, {key:3, title:'Shawarma'}]
  },

  {
    key:3,
    title:'Drinks',
    data:[{key:0, title:'Coke'},{key:1, title:'Fanta'},{key:2, title:'Mint'}, {key:3, title:'Sprite'}]
  },

]



export default function App() {

 //const[data,setData] = useState([]);

    const {data} = GetApiCustomHook("https://fakestoreapi.com/products");  

    

   

  return (

    
 <View style={styles.container}>

     <View style ={{flex:0.5}}>


       <Text style = {{textAlign:'center',fontSize:50,backgroundColor:'darkgrey',fontWeight:'bold'}}>Products List</Text>

       
  <CustomFlatList products={data} />

   </View>

   <View style ={{flex:0.5}}>

    <CustomSectionList products1 = {DATA}/>
   </View>

     {/* <FlatList
     data={data}
     renderItem={({item}) => 
       (
            
            
             <View style={{flex:1,padding:3,flexDirection:'row-reverse'}}>
            
          <View style ={{flex:0.2,backgroundColor:'white'}}>
         <TouchableOpacity>
          <Image source = {{uri:item.image}} style = {{width :70,height:100}}>

          </Image>
          </TouchableOpacity>
         </View>
           
           
          
          <View style={{ flex:0.8,backgroundColor:'lightgrey',borderBottomColor:'black'}}>
         <TouchableOpacity>
            <Text style = {{fontSize:10}}> {item.id}. </Text>
            <Text style = {{fontStyle:'italic',fontSize:10}}> {item.category} </Text>
           <Text style = {{fontSize:10}}> {item.title} </Text>
             <Text style = {{fontSize:10}}> {item.description} </Text>
            <Text style = {{textAlign:'left',paddingStart:240}}> $ {item.price} </Text>
             </TouchableOpacity>          </View>
           
           
           </View>
           
          
       )
     }
      
      keyExtractor={item => item.id}
        />  */}

 </View>
     
    
  );
                
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },
});
