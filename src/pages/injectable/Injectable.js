import { useState,useEffect } from "react";
import {firebase} from "../../components/firebase/firebase";
import JsxParser from "react-jsx-parser";


export default function Injectable() {
       
    const ref=firebase.firestore().collection('templates')
    console.log(ref);

    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true)

     function getData(){
       ref.onSnapshot((querySnapshot)=>{
         const items=[]
         querySnapshot.forEach((doc)=>{
           items.push(doc.data())
         })
         setData(items)
         setLoader(false)
       })
     }

     useEffect(()=>{
        getData()
        console.log(" jsx ",data);
     },[])
       

  return (
     <div>
     {loader===false &&
        <JsxParser
       jsx={data[0].jsxOne}
       
       />
      
     }
        
     
     </div>
   
  
);
    
};
  

   


