import firebase from "firebase/app";
import { Redirect, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./userSlice";
import RoomPage from "./components/RoomPage";
import { useEffect } from "react";

// firebase.initializeApp({
//   apiKey: "AIzaSyDWBkQjdvZjHIpip9Z1bm9IpDmzc1XxQmM",
//   authDomain: "react-firebase-chat-app-505e9.firebaseapp.com",
//   databaseURL: "https://react-firebase-chat-app-505e9.firebaseio.com",
//   projectId: "react-firebase-chat-app-505e9",
//   storageBucket: "react-firebase-chat-app-505e9.appspot.com",
//   messagingSenderId: "56873190707",
//   appId: "1:56873190707:web:ae292904dd7bcdb7542a46",
//   measurementId: "G-NKK3HT6H63",
// });

firebase.initializeApp({
  apiKey: "AIzaSyC-JTU4A_RcX6WZcNjfuHf0A4F4Y-9l24w",
  authDomain: "alpaca-dice-chat.firebaseapp.com",
  databaseURL: "https://alpaca-dice-chat-default-rtdb.firebaseio.com",
  projectId: "alpaca-dice-chat",
  storageBucket: "alpaca-dice-chat.appspot.com",
  messagingSenderId: "956525735606",
  appId: "1:956525735606:web:c3237851cdc71b9c6fc017"
});

function App() {
  const auth = firebase ? firebase.auth() : null;
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const storeUser = useSelector(selectUser);
  useEffect(() => {
    if (!storeUser && user) {
      const uid = user.uid;
      const photoURL = user.photoURL;
      const displayName = user.displayName;
      const userInfo = { uid, photoURL, displayName };
      dispatch(setUser({ userInfo }));
    }
  });

  return (
    <>
      <Route path="/">
        <Redirect to="/room/general/general" firebase={firebase}></Redirect>
      </Route>
      <Route path={`/room/:worldRef/:roomRef`}>
        <Navigation firebase={firebase}></Navigation>
        <RoomPage firebase={firebase}></RoomPage>
      </Route>
      <Route path="/login">
        <LoginPage auth={auth}></LoginPage>
      </Route>
    </>
  );
}

export default App;
