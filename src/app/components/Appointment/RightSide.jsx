"use client"
import React, { useState } from "react";
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RightSide = () => {
  const  [ user,setUser] = useState({
    name : "",
    phone : "",
    skill : ""
  })

  const handleChage = (e)=>{
    return setUser(()=>{
      return {...user,[e.target.name] : e.target.value}
    })
  }

  const handleSubmit  = ()=>{
    if(user.name && user.phone && user.skill){
      toast.success('Submitted', {
        position: "top-right",
        autoClose: 5000,
        
        });
    }else{
      toast.error("Fill all Field",{
        position: "top-right",
        autoClose: 5000,
      })
    }
   

      
  }
  return (
    <div className="mt-20">
      <div className="bg-white p-2 py-10 w-[70%] mx-auto rounded-md space-y-5">
        <div className="w-[80%] mx-auto">
          <p className=" text-[#333] text-lg pb-2">Name*</p>
          <input
            type="text"
            name="name"
            className="w-full
      outline-none p-2 ring-1 ring-[#999999] rounded-md
      " 
      onChange={handleChage}
            placeholder="Enter Your Name"
          />
        </div>

        <div className="w-[80%] mx-auto">
          <p className=" text-[#333] text-lg pb-2">Phone*</p>
          <input
            type="number"
            onChange={handleChage}
            name="phone"
            className="w-full
      outline-none p-2 ring-1 ring-[#999999] rounded-md
      "
            placeholder="Enter Your Name"
          />
        </div>

        <div className="w-[80%] mx-auto">
          <p className=" text-[#333] text-lg pb-2">Departement *</p>

          <select
            className="w-full
      outline-none p-2 ring-1 ring-[#999999] rounded-md
      "
      onChange={handleChage}
      name="skill"

          >

            <option value="Medicine">Medicine</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dentist">Dentist</option>
            <option value="Heart">Heart</option>
            <option value="Eye">Eye</option>
            <option value="Neoro">Neoro</option>
          </select>
        </div>

        <div className="w-[80%] mx-auto">
         <button onClick={handleSubmit} className="text-white bg-[#007E85] py-2 w-full rounded-md">Book Appointment</button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RightSide;
