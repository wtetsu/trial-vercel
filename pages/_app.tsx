import "../styles/globals.css";
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

const firebaseConfig = {
  apiKey: "AIzaSyCqe44Y-vBSGbU-b1qMsla8cx10G8Jgc3M",
  authDomain: "wtetsu-play-with-firebase.firebaseapp.com",
  databaseURL: "https://wtetsu-play-with-firebase.firebaseio.com",
  projectId: "wtetsu-play-with-firebase",
  storageBucket: "wtetsu-play-with-firebase.appspot.com",
  messagingSenderId: "443755345916",
  appId: "1:443755345916:web:1355ea45498f56cef9a479",
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
  console.log("initialized.............");
}

export default MyApp;
