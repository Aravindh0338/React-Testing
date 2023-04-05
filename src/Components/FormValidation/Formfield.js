import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import "./Formfield.css";

function Formfield() {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Enter UserName"),
    email: yup.string().email("Enter Valid Email").required("Enter Email"),
    password: yup
      .string()
      .min(7, "Enter minimum 7 Digit")
      .required("Enter Password"),
    age: yup.string().max(2).required("Select Age"),
    vehicle: yup.string().required("Select Gender"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      age: "",
      vehicle: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("submitted Values", values);
    },
  });

  return (
    <div className="formFieldWrapper" data-testid="formfield">

      
      <form className="mainFormWrap" onSubmit={formik.handleSubmit}>
        <h1 className="mainHeading">Register</h1>
        <div className="formWrapper">
          <div className="inputWrap">
          <label>Username</label>
          <input
            type="text"
            data-testid="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            name="username"
            placeholder="User Name"
          />
          {/* <br /> */}
          <p className={ formik.touched.username && formik.errors.username ? "displayBlock"  : "displayNone"}> {formik.errors.username}</p>

          {/* {formik.touched.username && formik.errors.username ? (
            <p className="errorText">{formik.errors.username}</p>
          ) : (
            ""
          )} */}
          </div>

          <div className="inputWrap">
          <label>Email</label>
          <input
            type="email"
            data-testid="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            placeholder="User Email"
          />
          {/* <br /> */}
          <p className={ formik.touched.email && formik.errors.email ? "displayBlock"  : "displayNone"}> {formik.errors.email}</p>
          {/* {formik.touched.email && formik.errors.email ? (
            <p className="errorText">{formik.errors.email}</p>
          ) : (
            ""
          )} */}
          </div>

          <div className="inputWrap">
          <label>Password</label>
          <input
            type="password"
            data-testid="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            placeholder="Password"
          />
          <p className={ formik.touched.password && formik.errors.password ? "displayBlock"  : "displayNone"}> {formik.errors.password}</p>

          {/* <br /> */}
          {/* {formik.touched.password && formik.errors.password ? (
            <p className="errorText">{formik.errors.password}</p>
          ) : (
            ""
          )} */}
          </div>

          <div className="inputWrap">
            <label>Gender</label>
          <select
            className="option"
            data-testid="dropdown"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.vehicle}
            name="vehicle"
          >
            <option value="car">Male</option>
            <option value="bike">Female</option>
            <option value="others">Others</option>
          </select>
          {/* <br /> */}
          <p className={ formik.touched.vehicle && formik.errors.vehicle ? "displayBlock"  : "displayNone"}> {formik.errors.vehicle}</p>
          {/* {formik.touched.vehicle && formik.errors.vehicle ? (
            <p className="errorText">{formik.errors.vehicle}</p>
          ) : (
            ""
          )} */}
          </div>

          <div className="radioBtnWrapper">
            <label>Age</label>
            <div className="radioWrap">
              <div className="radioBtnWrap">

            <span className="ageInputWrap">
              <input
                type="radio"
                data-testid="age1to30"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={30}
                name="age"
              />
              <label>1-30</label>
              {/* <br /> */}
            </span>
            <span className="ageInputWrap">
              <input
                type="radio"
                data-testid="age31to60"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={60}
                name="age"
              />
              <label>31-60</label>
              {/* <br /> */}
            </span>
            <span className="ageInputWrap">
              <input
                type="radio"
                data-testid="age61to90"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={90}
                name="age"
              />
              <label>61-90</label>
              {/* <br /> */}
            </span>
            </div>

          <p className={ formik.touched.age && formik.errors.age ? "displayBlock"  : "displayNone"}> {formik.errors.age}</p>

            {/* {formik.touched.age && formik.errors.age ? (
              <p className="errorText">{formik.errors.age}</p>
            ) : (
              ""
            )} */}
            </div>
          </div>
          
         
          {/* <input className="btn" type="submit" /> */}
          {/* <Button type="submit">Register</Button> */}
          <button className="btn" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Formfield;
