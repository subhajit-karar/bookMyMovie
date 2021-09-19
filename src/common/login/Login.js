import React,{useState} from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

function Login(props) {
  const onFormSubmitted = (e) => {
    e.preventDefault();
    props.loginHandle({"clicked":true});
    
  };
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  
   
  return (
    <ValidatorForm className="login-form" onSubmit={onFormSubmitted}>
      <br />
      <TextValidator
        id="username"
        label="Username *"
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        validators={["required"]}
        errorMessages={["required"]}
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
        value={password}
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
