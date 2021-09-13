import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

function Register() {
  const onFormSubmitted = (e) => {
    e.preventDefault();

    // addSubscriberHandler(addSubscriberForm);
    //     setAddSubscriberForm({ id: 0, name: '', phone: ' ' });
    // history.push("/")
  };
  return (
    <ValidatorForm className="register-form" onSubmit={onFormSubmitted}>
      <br />
      <TextValidator
        id="firstname"
        label="First name *"
        type="text"
        name="firstname"
        // onChange={inputChangedHandler}
        //value={}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="lastname"
        type="text"
        name="lastname"
        //  onChange={inputChangedHandler}
        label="Last name *"
        // value={"phone"}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="email"
        type="email"
        name="email"
        //  onChange={inputChangedHandler}
        label="Email *"
        // value={"phone"}
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
      <TextValidator
        id="phone"
        type="text"
        name="phone"
        //  onChange={inputChangedHandler}
        label="Contact no *"
        // value={"phone"}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </ValidatorForm>
  );
}

export default Register;
