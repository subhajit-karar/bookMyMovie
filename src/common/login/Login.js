import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

function Login() {
  const onFormSubmitted = (e) => {
    e.preventDefault();

    // addSubscriberHandler(addSubscriberForm);
    //     setAddSubscriberForm({ id: 0, name: '', phone: ' ' });
    // history.push("/")
  };
  return (
    <ValidatorForm className="login-form" onSubmit={onFormSubmitted}>
      <br />
      <TextValidator
        id="username"
        label="Username *"
        type="text"
        name="username"
        // onChange={inputChangedHandler}
        //value={}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="password"
        type="password"
        name="password"
        //  onChange={inputChangedHandler}
        label="Password *"
        // value={"phone"}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        login
      </Button>
    </ValidatorForm>
  );
}

export default Login;
