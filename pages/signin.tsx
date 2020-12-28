import React, { useState, useEffect } from "react";
import firebase from "firebase";

const SignIn = () => {
  useEffect(() => {}, []);
  const [username, setUsername] = useState("abc@dummy.com");
  const [password, setPassword] = useState("password");
  const [type, setType] = useState<"email" | "google">("email");

  const signIn = () => {
    switch (type) {
      case "email":
        signInWithEmail();
        break;
      case "google":
        signInGoogle();
        break;
    }
  };

  const signInWithEmail = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((user) => {
        alert(`Hello, ${user.user.email}`);
      })
      .catch((error) => {
        alert(`Failed: ${error.code}:${error.message}`);
      });
  };

  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // const token = result.credential.accessToken;
        const user = result.user;
        alert(`Hello, ${user.email}`);
      })
      .catch(function (error) {
        alert(`Failed: ${error.code}:${error.message}`);
      });
  };

  return (
    <div>
      <h1>Sign in</h1>
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

      <label>
        Type:
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="email">Email</option>
          <option value="google">Google</option>
        </select>
      </label>

      <input type="button" value="Sign in" onClick={signIn} />
      <script src="index.js"></script>
    </div>
  );
};

export default SignIn;
