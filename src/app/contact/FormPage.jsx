"use client";
import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./validation";
import ChildComponent from "./ErrorMsg";

const FormPage = () => {
  return (
    <div>
    <div className="sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4">
      <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
          <Form className="p-3 pt-0 ">
            <div className="gird text-center space-y-3">
              <div className="form-group w-[100%] ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2">
                  First Name*
                </p>
                <Field
                  name="fname"
                  type="text"
                  className="form-control  w-[350px] text-lg py-1 px-4 ]  rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="fname" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="form-group w-[100%] ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2">
                  Last Name*
                </p>
                <Field
                  name="lname"
                  type="text"
                  className="form-control  w-[350px] text-lg py-1 px-4   rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="lname" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="form-group w-[100%] ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2">
                  Email*
                </p>
                <Field
                  name="email"
                  type="text"
                  className="form-control  w-[350px] text-lg py-1 px-4   rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="email" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="form-group w-[100%] ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2">
                  Phone*
                </p>
                <Field
                  name="phone"
                  type="text"
                  className="form-control  w-[350px] text-lg py-1 px-4   rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="phone" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="form-group  col-span-2">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2">
                  Message*
                </p>
                <Field
                  name="message"
                  type="text"
                  as="textarea"
                  className="form-control  w-[350px] text-lg py-1 px-4  rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="message" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="col-span-2   text-center">
                <button className="bg-[#007E85] mx-auto text-white py-2 px-10 w-44 rounded-md  ">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      </div>
    </div>
  );
};

export default FormPage;
