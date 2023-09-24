"use client";
import React from "react";
import DoctorList from "./DoctorList";

const Admin = () => {
  return (
    <div className="grid grid-cols-1 ">
      <div className="w-96 bg-white rounded-sm mx-auto text-center">

      <input
        type="text"
        className="my-4 w-[80%] ring-1 rounded-md py-2 mx-5"
        name="img"
        placeholder="Enter Img Url"
      />
      <input
        type="number"
        className="my-4 w-[80%] ring-1 rounded-md py-2 mx-5"
        name="phone"
        placeholder="Enter Your phone"
      />
      <input
        type="city"
        className="my-4 w-[80%] ring-1 rounded-md py-2 mx-5"
        name="city"
        placeholder="Enter Your city"
      />
      <input
        type="qualification"
        className="my-4 w-[80%] ring-1 rounded-md py-2 mx-5"
        name="qualification"
        placeholder="Enter Your Qualification"
      />
      <div>
      <select className="my-4 w-[80%] ring-1 rounded-md py-2 mx-5">
        <option>Specilist</option>
        <option value={"medicine"}>Medicine</option>
        <option value={"gynecologist"}>Gynecologist</option>
        <option value={"dentist"}>Dentist</option>
        <option value={"heart"}>Heart</option>
        <option value={"eye"}>Eye</option>
        <option value={"neoro"}>Neoro</option>
      </select>
      </div>
     

      <button className="bg-sky-800 text-white px-10 py-4 my-5">Submit</button>

      </div>

      <div>

        <DoctorList></DoctorList>
      </div>
      
    </div>
  );
};

export default Admin;
