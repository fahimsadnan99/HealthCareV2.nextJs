"use client"
import React, { useState } from "react";
import { Router } from "next/router";
import {useRouter} from "next/navigation"

const FindDoctor = () => {

  const router = useRouter()
 
  const [data,setData] = useState({
    name : "",
    skill:""
  })

  const handleChange = (e)=>{
    setData(()=>{
      return {...data,[e.target.name]: e.target.value}
    })
  }

  const handleSubmit=()=>{
    router.push(`/service/${data.skill}`)
  }
  return (
    <div className="  bg-white rounded-md py-7 lg:py-8 px-2 lg:px-10 md:my-7 lg:my-16 mx-5">
      <p className="text-black font-semibold text-2xl mb-5">Find a Doctor</p>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 lg:space-y-0 items-center justify-center ">
        <div className="mt-4 lg:mt-0 ">
          <input placeholder="Enter Name(Optional)" type="text" name="name" className="px-5 py-3 outline-none ring-1 ring-slate-300 rounded-sm w-72 md:w-60 lg:w-72"
          onChange={handleChange}
          />
          
        </div>

        <div>
          <select name="skill" className="px-5 py-3.5 outline-none ring-1 ring-slate-300 rounded-sm w-72 md:w-60 lg:w-72" onChange={handleChange}>
            <option className="text-black/30">Select Speciality</option>
            <option name="Medicine">Medicine</option>
            <option name="Gynecologist">Gynecologist</option>
            <option name="Dentist">Dentist</option>
            <option name="Heart">Heart</option>
            <option name="Eye">Eye</option>
            <option name="Neoro">Neoro</option>
          </select>
        </div>

        <div>
          <button onClick={handleSubmit} className="bg-[#007E85] text-white px-16 py-3 rounded-sm ">Search</button>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
