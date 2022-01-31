import { useCollectionData } from "react-firebase-hooks/firestore";

// const useChatroomMessagesInfo = ({ firebase, roomRef = null }) => {
//   const firestore = firebase.firestore();
//   const chatroomsRef = firestore.collection("chatrooms");
//   const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
//   const [chatrooms] = useCollectionData(chatroomsRef);
//   const getMessagesByTime = messagesRef.orderBy("createdAt");
//   const [messages] = useCollectionData(getMessagesByTime);
//   const currentRoom = chatrooms
//     ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
//     : null;

//   return { chatrooms, messages, currentRoom, messagesRef, chatroomsRef };
// };
const useChatroomMessagesInfo = ({ firebase, worldRef = null, roomRef = null }) => {
  const firestore = firebase.firestore();
  const worldidRef = firestore.collection("worldId");
  const worldmsgRef = worldidRef.doc(worldRef).collection("messages");
  const [worldIds] = useCollectionData(worldidRef);
  const chatroomsRef = worldmsgRef.doc(worldRef).collection("chatrooms");
  const messagesRef = chatroomsRef.doc(roomRef).collection("messages");
  const [chatrooms] = useCollectionData(chatroomsRef);
  const getMessagesByTime = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(getMessagesByTime);
  const currentWorld = worldIds
    ? worldIds.find((worldid) => worldRef === worldid.ref)
    : null;
const currentRoom = chatrooms
    ? chatrooms.find((chatroom) => roomRef === chatroom.ref)
    : null;

  return { worldIds, chatrooms, messages, currentRoom, currentWorld, messagesRef, chatroomsRef, worldidRef };
};
export default useChatroomMessagesInfo;
