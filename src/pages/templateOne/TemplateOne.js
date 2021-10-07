import React from 'react'
import JsxParser from "react-jsx-parser";
import "./templateOne.css";
import Injectable from '../injectable/Injectable';



const TemplateOne =()=> (
    
 <div>
       <JsxParser
       components={{ Injectable }}
       jsx={`
         <Injectable />
       `} 
       onError={err => {
        console.log('ERROR!!', err);
      }}
       />

       
       </div>
    );

export default TemplateOne;