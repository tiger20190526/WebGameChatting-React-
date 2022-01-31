import Menu from "../Menu";
import World from "../World";
import ChatRoom from "../ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import { GridContainer } from "./styled";
import { Wrapper } from "../Wrapper";
import { useSelector } from "react-redux";
import { selectUser } from "../../userSlice";
import { Redirect } from "react-router-dom";

const RoomPage = ({ firebase }) => {
  const storeUser = useSelector(selectUser);
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  if (!storeUser) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <>
      <Wrapper>
        <GridContainer>
          <World firebase={firebase} firestore={firestore} auth={auth}></World>
          <Menu firebase={firebase} firestore={firestore} auth={auth}></Menu>
          <ChatRoom
            firebase={firebase}
            user={user}
            firestore={firestore}
            auth={auth}
          />
        </GridContainer>
      </Wrapper>
    </>
  );
};
export default RoomPage;
