import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

function LoginSignup(props) {
  let [user, setUser] = useState("Login");
  let [reset, setReset] = useState(false);

  let loginError = {
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password length must be greater than 6 characters.")
      .max(12, "Password length must be less than 12 characters.")
      .required("Password is Required"),
  };
  let signupError = {
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password length must be greater than 6 characters.")
      .max(12, "Password length must be less than 12 characters.")
      .required("Password is Required"),
  };

  let resetError = {
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email is Required"),
  };

  let schema, initVal;

  if (user === "Login" && reset === false) {
    schema = yup.object().shape(loginError);
    initVal = {
      email: "",
      password: "",
    };
  } else if (user === "Signup" && reset === false) {
    schema = yup.object().shape(signupError);
    initVal = {
      name: "",
      email: "",
      password: "",
    };
  } else if (reset === true) {
    schema = yup.object().shape(resetError);
    initVal = {
      email: "",
    };
  }

  const handleLogin = (values) => {
    console.log("Login");
  };

  const handleSignup = (values) => {
    console.log("Signup");
  };
  const handleReset = (values) => {
    console.log("Forgot");
  };

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values) => {
      if (user === "Login") {
        handleLogin(values);
      } else if (user === "Signup") {
        handleSignup(values);
      } else if (reset === true) {
        handleReset(values);
      }
    },
  });

  return (
    <main id="main">
      <section id="auth" className="auth">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-lg-8 py-5 px-5">
              <div className="d-flex flex-column justify-content-center text-center">
                {reset === true ? (
                  <h2 className="display-4 fw-bold text-dark mb-3">
                    Forgot Your Password
                  </h2>
                ) : user === "Login" ? (
                  <div>
                    <h2 className="display-4 fw-bold text-dark mb-3">
                      Login to Your Account
                    </h2>
                    <h5 className="social">Login using social networks</h5>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                      <a href="#" className="facebook">
                        <i className="bx bxl-facebook" />
                      </a>
                      <a href="#" className="google-plus">
                        <i className="bx bxl-skype" />
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </div>
                    <p className="usingmail mb-1">OR</p>
                  </div>
                ) : (
                  <h2 className="display-4 fw-bold text-dark mb-3">
                    Signup to Your Account
                  </h2>
                )}
                <Formik>
                  <Form onSubmit={formik.handleSubmit}>
                    {user === "Signup" ? (
                      <FormGroup floating>
                        <Input
                          id="exampleName"
                          name="name"
                          placeholder="Name"
                          type="name"
                          onChange={formik.handleChange}
                        />
                        <Label for="exampleName">Name</Label>
                        {formik.errors.name ? (
                          <p className="text-start ms-3 text-danger small">
                            {formik.errors.name}
                          </p>
                        ) : null}
                      </FormGroup>
                    ) : null}
                    <FormGroup floating>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={formik.handleChange}
                      />
                      <Label for="exampleEmail">Email</Label>
                      {formik.errors.email ? (
                        <p className="text-start ms-3 text-danger small">
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </FormGroup>
                    <FormGroup floating>
                      {reset === true ? null : (
                        <>
                          <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            type="password"
                            onChange={formik.handleChange}
                          />
                          <Label for="examplePassword">Password</Label>
                          {formik.errors.password ? (
                            <p className="text-start ms-3 text-danger small">
                              {formik.errors.password}
                            </p>
                          ) : null}
                        </>
                      )}
                      {user === "Login" ? (
                        <Button
                          className="bg-transparent text-dark border-0 p-0"
                          onClick={() => {
                            setReset(true);
                            setUser("");
                          }}
                        >
                          Forgot Password ?
                        </Button>
                      ) : user === "Signup" ? null : (
                        <Button
                          className="bg-transparent text-dark border-0 p-0"
                          onClick={() => {
                            setUser("Login");
                            setReset(false);
                          }}
                        >
                          Back to login
                        </Button>
                      )}
                    </FormGroup>
                    {reset === true ? (
                      <Button type="submit" className="theambtn">
                        Reset Password
                      </Button>
                    ) : user === "Login" ? (
                      <Button type="submit" className="theambtn">
                        Log In
                      </Button>
                    ) : (
                      <Button type="submit" className="theambtn">
                        Sign Up
                      </Button>
                    )}
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="login">
          {user === "Signup" ? (
            <div className="d-flex align-items-center justify-content-center">
              <h2 className="display-5 mb-0 fw-bold me-4">
                Already Have An Account ?
              </h2>
              <Button
                type="button"
                className="theambtn"
                onClick={() => {
                  setUser("Login");
                  setReset(false);
                }}
              >
                Log In
              </Button>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <h2 className="display-5 mb-0 fw-bold me-4">New Here?</h2>
              <Button
                type="button"
                className="theambtn"
                onClick={() => {
                  setUser("Signup");
                  setReset(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default LoginSignup;
