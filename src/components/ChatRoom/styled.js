import styled, { css } from "styled-components";

const Header = styled.header`
  font-family: "Noto Sans JP", sans-serif;
  margin-top: 30px;
  text-align: center;
  font-weight: 500;
  font-size: 26px;
  line-height: 20px;
  &:first-letter {
    text-transform: uppercase;
  }
`;
const RelativeDiv = styled.div`
  max-width: 100%;
  position: relative;
`;
const MessagesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 16px;
`;
const Message = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 16px;
  ${({ isAuthor }) =>
    isAuthor &&
    css`
      flex-direction: row-reverse;
    `}
`;
const MessageAuthorName = styled.p`
  font-size: 13px;
  position: absolute;
  min-width: 60px;
  transform: translateY(-39px) translateX(-5px);
  color: ${({ theme }) => theme.color.midGray};
`;
const AuthorAvatar = styled.img`
  width: 45px;
  border-radius: 50%;
  align-self: flex-start;
  transform: translateY(-10px);
  ${({ isAuthor }) =>
    isAuthor &&
    css`
      transform: translateY(20px);
    `};
`;
const MessageText = styled.p`
  position: relative;
  font-size: 15px;
  line-height: 140%;
  border: #1c1c24 1px solid;
  padding: 8px 12px;
  margin: 0 8px;
  color: white;
  border-radius: 10px;
  border-top-left-radius: 0;
  ${({ isAuthor }) =>
    isAuthor &&
    css`
      border: none;
      background-color: #4447e2;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 0;
    `}
`;
const MessageTime = styled.div`
  font-size: 12px;
  text-align: center;
  flex-grow: 0;
  color: #ccc;
  margin: 0 8px;
`;
const MessageForm = styled.form`
  width: calc(1220px - 300px);
  max-width: 1220px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  position: fixed;
  bottom: 0;
  @media (max-width: 1200px) {
    width: calc(100% - 332px);
  }
`;
const FormInput = styled.input`
  font-family: "Roboto", sans-serif;
  padding: 12px;
  flex-grow: 1;
  font-size: 16px;
  border: #1c1c24 1px solid;
  border-radius: 0;
  border-top-left-radius: 8px;
  &::placeholder {
  }
  &:focus {
    border: #1c1c24 1px solid;
  }
`;
const FormSubmit = styled.button`
  padding: 12px 20px;
  font-size: 26px;
  border: #1c1c24 1px solid;
  border: none;
  border-top-right-radius: 8px;
  color: white;
  &:hover {
    filter: brightness(1.2);
  }
`;
export {
  RelativeDiv,
  FormSubmit,
  FormInput,
  MessagesList,
  AuthorAvatar,
  Message,
  MessageAuthorName,
  MessageText,
  MessageTime,
  MessageForm,
  Header,
};
