import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  
  
} from 'formik'
import {number,object,string,array}  from 'yup'
import firebase from "../../components/firebase/firebase";
import {TextField} from "formik-material-ui";
import "./details.css"; 
import { useHistory } from 'react-router';







const initialValues = {
  name: '',
  phoneNumber:'',
  email:'',
  objective:'',
  social: [''],
  education:[{institution:'',course:'',duration:'',city:''}],
  work:[{position:'',company:'',desc:'',duration:''}],
  awards:[''],
  skills:['']
  }

  
    



  const onSubmit = (values, submitProps) => {
    const firestore=firebase.database().ref('users');
    firestore.push(values)
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)
    submitProps.resetForm()
  }
  
const validationSchema = object({
  name: string().required("Required"),
  phoneNumber:number()
  .min(10, "Must at least 10 digits")
  .required('Required'),
  email:string()
  .email('Invalid email format')
  .required('Required'),
  objective:string()
  .required('Required'),
  social:array().min(1).max(3).required('Required')
 
})



export default function Details(){ 
  let history=useHistory();
  
  
const [formValues] = useState(null)
return (
  <Formik
 
    initialValues={formValues || initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    enableReinitialize
    validateOnMount
  >
    {formik => {
      console.log('Formik props', formik)
      return (
        <div className="details">
        <Form autoComplete="off">
        <h2 className="form-head">Add Resume Details</h2>
        <h4 className="head-personal">Personal Details</h4>
          <div className="personal">
          <div className="name">
             <Field type='text' name='name'  component={TextField} label="Full Name"/>
              </div>

            <div className="phone"> 
            <Field type='tel' name='phoneNumber' component={TextField} label="Phone Number" />
             </div>

             <div className="email">
             <Field type='email' name='email' component={TextField} label="Email"/>
             </div>
              </div>
              <div class="other">
          <div className="social">
          <FieldArray name='social'>
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { social } = values
                // console.log('fieldArrayProps', fieldArrayProps)
                // console.log('Form errors', form.errors)
                return (
                  <div>
                    {social.map((social, index) => (
                      <div key={index}>
                        <Field name={`social[${index}]`}  component={TextField} className="field-social" label="Social Profiles"/>
                        <ErrorMessage name={`social[${index}]`}/>
                        {index > 0 && (
                          <button  className="delete" type='button' onClick={() => remove(index)}>
                           Delete
                          </button>
                        )}
                      </div>
                    ))}
                    <button className="profile-btn" type='button' onClick={() => push('')}>
                      Add Profile
                    </button>
                  </div>
                )
              }}
            </FieldArray>
          </div>

          <div className="objective">
          <label className="obj" htmlFor='objective'>Objective</label>
          <Field className="text-obj" as="textarea" name='objective' />
         <ErrorMessage  name="objective"/>
          </div>
         

        </div>
          
         <h4 className="edu-head"> Education</h4>

        <div className="education">
         
        <FieldArray
          name="education">
          {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { education } = values
                
                return(
                  <div>
                    {values.education.map((_,index)=>(
                      <div className="dis-edu">
                        <div className="edu-first">
                        <div className="institution" >
                       <Field  
                       name={`education[${index}].institution`} 
                       component={TextField} 
                       label="Institution"
                       />
                        </div>
                        <div className="course" >
                       <Field  
                       name={`education[${index}].course`} 
                       component={TextField} 
                       label="Course or Standard"
                       
                       /> 
                       </div>
                       </div>
                        <div className="edu-second">
                      <div className="duration">
                        <Field  
                        name={`education[${index}].duration`}
                        component={TextField}
                        label="Completed In Year" 
                        /> 
                        </div>
                        <div className="city">
                      <Field  
                      name={`education[${index}].city`}
                      component={TextField}
                      label="City" 
                      />
                      </div>
                      </div>
                     {index>0 &&(
                     <button className="edu-delete" type="button" onClick={()=>remove(index)}>Delete</button>
                     )}
                         </div>
                    ))}
                    
                    <button className="edu-btn"type="button" onClick={()=>push({institution:'',course:'',duration:'',city:''})}>Add Education</button>
                   
                  </div>
                  
                )
              }}
            
         </FieldArray>   
        </div>
        <h4 className="work-head">Work Experience(If Any)</h4>
        <div className="work">
        <FieldArray
             name="work">
             {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { work } = values

                return(
                  <div>
                 {values.work.map((_,index)=>(
                  <div className="work">
                    <div className="work-first">
                       
                       <div className="position">
                     <Field 
                     name={`work[${index}].position`} 
                     component={TextField} 
                     label="Position"  
                     />
                     </div>
                     <div className="company"> 
                      <Field 
                      name={`work[${index}].company`}  
                      component={TextField} 
                      label="Company Name"/>
                         </div>
                         </div>
                           <div className="work-second">
                             <div className="about">
                      <Field 
                      name={`work[${index}].desc`}
                      component={TextField}
                      label="About" 
                      />
                      </div>

                      <div className="duration">
                      <Field 
                      name={`work[${index}].duration`}
                      component={TextField}
                      label="From-To" 
                      />
                      </div>
                      </div>
                     {index>0 &&(
                     <button className="work-delete" type="button" onClick={()=>remove(index)}>Delete</button>
                     )}
                  </div>  
                 ))}  
                   <button className="work-btn" type="button" onClick={()=>push({position:'',company:'',desc:'',duration:''})}>Add Experience</button>   
               </div>
                )
             }}

             </FieldArray>
        </div>
        <h4 className="head-award"> Achievements and Skills</h4>
        <div className="last">
          <div className="awards">
          <label>Awards and Acknowledgments</label>
            <FieldArray name='awards'>
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { awards } = values
                // console.log('fieldArrayProps', fieldArrayProps)
                // console.log('Form errors', form.errors)
                return (
                  <div>
                    {awards.map((awards, index) => (
                      <div key={index}>
                        <Field as="textarea" name={`awards[${index}]`} />
                        {index > 0 && (
                          <button className="delete"  type='button' onClick={() => remove(index)}>
                            Delete
                          </button>
                        )}
                      </div>
                    ))}
                    <button className="award-btn" type='button' onClick={() => push('')}>
                     Add Achievements
                    </button>
                  </div>
                )
              }}
            </FieldArray>
          </div>

          <div className="skills">
          <FieldArray name='skills'>
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { skills} = values
                // console.log('fieldArrayProps', fieldArrayProps)
                // console.log('Form errors', form.errors)
                return (
                  <div>
                    {skills.map((skills, index) => (
                      <div key={index}>
                        <div className="skill-first">
                        <Field 
                        name={`skills[${index}]`}
                        component={TextField}
                        label="Skills" 
                        />
                        </div>
                        {index > 0 && (
                          <button className="skill-delete" type='button' onClick={() => remove(index)}>
                            Delete
                          </button>
                        )}
                      </div>
                    ))}
                    <button  className="skill-btn" type='button' onClick={() => push('')}>
                     Add Skills
                    </button>
                  </div>
                )
              }}
            </FieldArray>
          </div>
          <button
          onClick={()=>{history.push('/templates')}}
          className="submit"
            type='submit'
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>


        </div>
        

        
        </Form>
        </div>
        
      )
    }}
   </Formik>
   
  
)
}
