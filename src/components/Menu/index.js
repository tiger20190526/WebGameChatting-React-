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
  console.log("worldRef:" + worldRef);
  const { worldIds, chatrooms, chatroomsRef, worldidRef, currentRoom } = useChatroomMessagesInfo({
    firebase: firebase,
    worldRef: worldRef,
    roomRef: roomRef,
  });
  const [titleInput, setTitleInput] = useState("");
  const onTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  const currentUserId = storeUser ? storeUser.uid : null;

  const onFormSubmit = (e) => {
    e.preventDefault();
    const ref = nanoid();
    const members = [currentUserId];
    try {
      if (titleInput.trim() !== "") {
        chatroomsRef.doc(ref).set({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          title: titleInput,
          creator: currentUserId,
          ref: ref,
          private: false,
          members: members,
        });
        setTitleInput("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div style={{marginTop: 50}}>&nbsp;</div>

      <form onSubmit={onFormSubmit}>
        <input
          placeholder="チャットタイトル"
          value={titleInput}
          style={{lineHeight: 2}}
          onChange={onTitleInputChange}
        ></input>
        <button>新しい部屋を追加</button>
      </form>
      <Header>チャットルーム:</Header>
      <ChatroomsContainer>
        {chatrooms
          ? chatrooms.map((chatroom) =>
              generateChatroom(chatroom, currentUserId, worldRef)
            )
          : ""}
      </ChatroomsContainer>
    </Container>
  );
};
export default Menu;
