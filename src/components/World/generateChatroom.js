import { Room } from "./styled";

const generateChatroom = (worldId, currentUserId) => {
  //checking if a chatroom should be displayed
  // user needs to be a member or the chat should be public
  if (
    (worldId.members &&
      worldId.members.some((item) => item === currentUserId)) ||
    !worldId.private
  ) {
    return (
      <Room to={`/room/${worldId.ref}/general`} key={`${worldId.ref}`}>
        {worldId.title}
      </Room>
    );
  }
  return null;
};
export default generateChatroom;
