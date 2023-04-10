import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import "../FormValidation/Formfield.css";
import { useNavigate } from "react-router";

function FormFieldDemo() {
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    username: yup.string().required("Enter UserName"),
    email: yup.string().email("Enter Valid Email").required("Enter Email"),
    password: yup
      .string()
      .min(7, "Enter minimum 7 Digit")
      .required("Enter Password"),
    age: yup.string().max(2).required("Select Age"),
    gender: yup.string().required("Select Gender"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("submitted Values", values);
      navigate("/register-data", { state: { values } });
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
            <p
              className={
                formik.touched.username && formik.errors.username
                  ? "displayBlock"
                  : "displayNone"
              }
            >
              {" "}
              {formik.errors.username}
            </p>
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

            <p
              className={
                formik.touched.email && formik.errors.email
                  ? "displayBlock"
                  : "displayNone"
              }
            >
              {" "}
              {formik.errors.email}
            </p>
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
            <p
              className={
                formik.touched.password && formik.errors.password
                  ? "displayBlock"
                  : "displayNone"
              }
            >
              {" "}
              {formik.errors.password}
            </p>
          </div>

          <div className="inputWrap">
            <label>Gender</label>
            <select
              className="option"
              data-testid="dropdown"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vehicle}
              name="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>

            <p
              className={
                formik.touched.gender && formik.errors.gender
                  ? "displayBlock"
                  : "displayNone"
              }
            >
              {" "}
              {formik.errors.gender}
            </p>
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
                </span>
              </div>

              <p
                className={
                  formik.touched.age && formik.errors.age
                    ? "displayBlock"
                    : "displayNone"
                }
              >
                {" "}
                {formik.errors.age}
              </p>
            </div>
          </div>

          <button data-testid="submit" className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormFieldDemo;
