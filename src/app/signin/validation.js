import *  as Yup from "yup"





export const initialValuesSignin = {
  email : '',
  password : '',
 
}


export const validationSchemaSignin = Yup.object({
  
  email : Yup.string().email("invalid Email").required("Email is required"),
  password : Yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	

})