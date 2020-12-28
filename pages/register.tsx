import React, { useState, useEffect } from "react";
import firebase from "firebase";

const Register = () => {
  useEffect(() => {}, []);
  const [username, setUsername] = useState("abc@dummy.com");
  const [password, setPassword] = useState("password");

  const register = (params) => {
    // alert(`${username}:${password}`);
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((user) => {
        alert("// Signed in");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <br />

      <label>
        Password:
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <br />

      <input type="button" value="Register" onClick={register} />
      <script src="index.js"></script>
    </div>
  );
};

export default Register;
