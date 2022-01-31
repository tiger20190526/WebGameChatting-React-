import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../userSlice";
import generateChatroom from "./generateChatroom";
import { Container, Header, ChatroomsContainer } from "./styled";
import useChatroomMessagesInfo from "../../utils/useChatroomMessagesInfo";

const Menu = ({ firebase }) => {
  const storeUser = useSelector(selectUser);
  const { worldRef } = useParams();
  const { roomRef } = useParams();
  const { worldIds, chatrooms, chatroomsRef, worldidRef, currentRoom } = useChatroomMessagesInfo({
    firebase: firebase,
    worldRef: worldRef,
    roomRef: roomRef,
  });

  const [worldIdInput, setWorldIdInput] = useState("");
  const onWorldIdInputChange = (e) => {
    setWorldIdInput(e.target.value);
  }
  const currentUserId = storeUser ? storeUser.uid : null;

  const onWorldFormSubmit = (e) => {
    e.preventDefault();
    const ref = nanoid();
    const members = [currentUserId];
    try {
      if (worldIdInput.trim() !== "") {
        worldidRef.doc(ref).set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          title: worldIdInput,
          creator: currentUserId,
          ref: ref,
          private: false,
          members: members,
        });
        setWorldIdInput("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div style={{marginTop: 50}}>&nbsp;</div>

      <form onSubmit={onWorldFormSubmit}>
        <input
          placeholder="WorldId"
          value={worldIdInput}
          style={{lineHeight: 2}}
          onChange={onWorldIdInputChange}
        ></input>
        <button>新しいIdを追加</button>
      </form>
      <Header>worldId:</Header>
      <ChatroomsContainer>
        {worldIds
          ? worldIds.map((worldid) =>
              generateChatroom(worldid, currentUserId)
            )
          : ""}
      </ChatroomsContainer>

    </Container>
  );
};
export default Menu;
