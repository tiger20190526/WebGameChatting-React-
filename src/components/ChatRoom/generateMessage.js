import {
  AuthorAvatar,
  Message,
  MessageAuthorName,
  MessageText,
  MessageTime,
} from "./styled";

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

const generateMessage = (message, currentUser) => {
  const isAuthor = message.uid === currentUser.uid;
  let name;
  name = message.authorName ? message.authorName : null;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  // console.log(name);
  return (
    <Message isAuthor={isAuthor} key={`${message.id}${message.uid}`}>
      <AuthorAvatar
        isAuthor={isAuthor}
        alt={"avatar"}
        src={message.photoURL}
      ></AuthorAvatar>

      <MessageText isAuthor={isAuthor}>
        <MessageAuthorName>{name}</MessageAuthorName>
        {message.text}
      </MessageText>

      <ReactDice
        faceColor="#FF5A00"
        dotColor="#FFFFFF"
        dieSize={30}
        numDice={1}
        defaultRoll={getRandomInt(1,6)}
      />

      <MessageTime>
        {message.createdAt
          ? `${new Date(message.createdAt.seconds * 1000).toLocaleTimeString()}
                     ${new Date(
                       message.createdAt.seconds * 1000
                     ).toLocaleDateString()}`
          : ``}
      </MessageTime>
    </Message>
  );
};
export default generateMessage;
//function that generates a message and displays it depending on whether the currentUser is author
