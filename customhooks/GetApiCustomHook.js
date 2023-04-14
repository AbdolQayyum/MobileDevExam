import axios from 'axios'
import { useState ,useEffect} from 'react';

const GetApiCustomHook =(url)=> {

  const[data,setData] = useState([]);

  useEffect(()=>{
      axios.get(url,{

      })
        .then(function (response) {
            
            //console.log('response',response.data);
            
            setData(response.data)
        
          })
        .catch(function (error) {
            console.log(error);
        });
        
    },[])

  return (
    {data,setData}
  )
}

export default GetApiCustomHook;
