import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

function Register(props) {
  async function onFormSubmitted(e) {
    e.preventDefault();
    //Temp adding msg after all validation
    setTextUpdate("Registration Successful, please login!");
    const rawResponse = await fetch(props.baseUrl+"signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        first_name: firstName,
        last_name: lastName,
        mobile_number: phone,
        password: pass,
      }),
    });
    const data = await rawResponse.json();
    console.log(data);
    if(data.status === "ACTIVE"){
      setTextUpdate("Registration Successful, please login!");
    }
    
  }
  const [email, setEmail] = useState();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [textUpdate, setTextUpdate] = useState("");
  
  return (
    <ValidatorForm className="register-form" onSubmit={onFormSubmitted}>
      <br />
      <TextValidator
        id="firstname"
        label="First name *"
        type="text"
        name="firstname"
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
        value={firstName}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="lastname"
        type="text"
        name="lastname"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        label="Last name *"
        value={lastName}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="email"
        type="text"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        label="Email *"
        value={email}
        validators={["required", "isEmail"]}
        errorMessages={["required", "not valid"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="password"
        type="password"
        name="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
        label="Password *"
        value={pass}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <TextValidator
        id="phone"
        type="text"
        name="phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        label="Contact no *"
        value={phone}
        validators={["required"]}
        errorMessages={["required"]}
      ></TextValidator>
      <br />
      <p>{textUpdate}</p>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </ValidatorForm>
  );
}

export default Register;
