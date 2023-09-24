import *  as Yup from "yup"

export const initialValues = {
    fname : '',
    lname : '',
    email : '',
    phone : '',
    message : ''
    
  }


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object({
    fname : Yup.string().required("First Name is required"),
    lname : Yup.string().required("Last Name is required"),
    email : Yup.string().email("invalid Email").required("Email is required"),
    phone : Yup.string().matches(phoneRegExp,"Phone number is not valid").required("Phone number is required"),
    message : Yup.string().required("Message is required"),
  
})



// export const initialValuesSignin = {

//   email : '',
//   password : '',
 
// }


// export const validationSchemaSignin = Yup.object({

//   email : Yup.string().email("invalid Email").required("Email is required"),
//   password : Yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	

// })