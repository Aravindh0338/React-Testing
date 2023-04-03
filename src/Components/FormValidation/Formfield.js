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
    age: yup.string().max(2).required("select Age"),
    vehicle: yup.string().required("select Vehicle"),
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
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="formWrapper">
          <input
            type="text"
            data-testid="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            name="username"
            placeholder="User Name"
          />
          <br />
          {formik.touched.username && formik.errors.username ? (
            <p className="errorText">{formik.errors.username}</p>
          ) : (
            ""
          )}

          <input
            type="email"
            data-testid="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            placeholder="User Email"
          />
          <br />
          {formik.touched.email && formik.errors.email ? (
            <p className="errorText">{formik.errors.email}</p>
          ) : (
            ""
          )}

          <input
            type="password"
            data-testid="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="errorText">{formik.errors.password}</p>
          ) : (
            ""
          )}

          <div>Select your age</div>
          <div className="radioBtnWrapper">
            <span>
              <input
                type="radio"
                data-testid="age1to30"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={30}
                name="age"
              />
              <label>1-30</label>
              <br />
            </span>
            <span>
              <input
                type="radio"
                data-testid="age31to60"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={60}
                name="age"
              />
              <label>31-60</label>
              <br />
            </span>
            <span>
              <input
                type="radio"
                data-testid="age61to90"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={90}
                name="age"
              />
              <label>61-90</label>
              <br />
            </span>
            {formik.touched.age && formik.errors.age ? (
              <p className="errorText">{formik.errors.age}</p>
            ) : (
              ""
            )}
          </div>
          <select
            className="option"
            data-testid="dropdown"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.vehicle}
            name="vehicle"
          >
            <option value="car">car</option>
            <option value="bike">bike</option>
            <option value="others">others</option>
          </select>
          <br />
          {formik.touched.vehicle && formik.errors.vehicle ? (
            <p className="errorText">{formik.errors.vehicle}</p>
          ) : (
            ""
          )}

          {/* <input className="btn" type="submit" /> */}
          <button className="btn" >submit</button>
        </div>
      </form>
    </div>
  );
}

export default Formfield;
