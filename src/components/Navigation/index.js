import React from "react";
import firebase from "firebase/app";
import { NavBar, Logo, NavigationContainer } from "./styled.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "../SignOut";
import SignIn from "../SignIn";
import { Wrapper } from "../Wrapper/index.js";

const Navigation = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);
  return (
    <NavBar>
      <Wrapper>
        <NavigationContainer>
          <Logo to="/room/general/general">サイコロチャットアプリ</Logo>
        </NavigationContainer>
      </Wrapper>
    </NavBar>
  );
};

export default Navigation;
