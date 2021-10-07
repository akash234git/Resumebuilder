import { useState,useEffect } from "react";
import firebase from "firebase";



export default function Injectable() {
    const [userData,setUserData]=useState([]);
  useEffect(()=>{
    const firestore=firebase.database().ref('users');
    firestore.on('value',(response)=>{
      const data=response.val();
      let users=[];
      for(let id in data ){
        users.push({
          id:id,
          name:data[id].name,
          phoneNumber:data[id].phoneNumber,
          email:data[id].email,
          objective:data[id].objective,
          social:data[id].social,
          institution:data[id],
          course:data[id],
          duration:data[id],
          city:data[id],
          position:data[id],
          company:data[id],
          desc:data[id],
          duration:[id].work,
          awards:[id].awards,
          skills:[id].social


        })
      }
      setUserData(users);
    })
},[])
    return (
        <div>
             
    {
        
        <div>
        {
      userData.length===0 ? (<h5>No data</h5>):(
        <div>
          
        </div>
      ) 
    }
    <div>
      {
        userData.map((data,index)=>{
          return <div>
             <div className="main">
       <div className="head-main"> <h2>Template One</h2> </div>
        <div className="temp-first">
         <div className="top">
           <h1>{data.name}</h1>
          <div className= "top-email">
        <p>social|c-32/32|phoneNumber|email</p>
          </div>
       </div>
       <div className= "objective">
           <h3>Objective</h3>
           <div>
           <p>data.objective</p>
               </div>
       </div>
       <div className="education">
           <h3>Education</h3>
           <div className="edu-list">
           <ul>
          <li>{data.institution[0]}</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Water</li>
           </ul>
           </div>
       </div>
       <div className="experience">
           <h3>Experience</h3>
           <div className="firstJob">
               <div className="duration">
                   [From]-[To]
               </div>
               <div className="jobTitle"></div>
               <h5>[Job Title] [Company Name] [Location]</h5>
               <div className="jobDesc">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </div>
           </div>
       </div>
       <div className="secondJob">
               <div className="duration">
                   [From]-[To]
               </div>
               <div className="jobTitle"></div>
               <h5>[Job Title] [Company Name] [Location]</h5>
               <div className="jobDesc">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </div>
           </div>
             <div className="awards">
                 <div>
                      <h3>Award and Acknowledgements</h3>
                     </div>
                     <div className="award-list">
                     <ul>
                    <li>Coffee</li>
                     <li>Tea</li>
                      <li>Milk</li>
                       </ul>
                     </div>
             </div>
             </div>
        </div>
            </div>
        })
      }
    </div>
    </div>
        
    }
    


        </div>
    )
}

    

   


