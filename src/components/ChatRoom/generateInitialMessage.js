const generateInitialMessage = (currentRoom) => {
  return `こんにちは ！ これはの始まりです #${
    currentRoom && currentRoom.title
  } チャネル`;
};
export default generateInitialMessage;
//function that generates a message for an empty chatRoom
