import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setTestUser } from "../../../userSlice";
import Button from "../../Button";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Container, Header } from "./styled";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://twitter.com/diveintohacking"
        target="_blank"
        rel="noopener"
      >
        はむさん
      </Link>
    </Typography>
  );
}

const LoginPrompt = ({ auth }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = string === '';
    setDisabled(disabled);
  }, [string]);

  return (
    <Container>
      <Header>
        <Typography component="h1" color="primary" variant="h5">
          ようこそ
        </Typography>
      </Header>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="ニックネーム"
        name="name"
        autoFocus
        onChange={(e) => setString(e.target.value)}
        onKeyDown={(e) => {
          if (isComposed) return;

          if (e.key === 'Enter') {
            setName(e.target.value);
            e.preventDefault();
          }
        }}
        onCompositionStart={() => setIsComposed(true)}
        onCompositionEnd={() => setIsComposed(false)}
      />
      <Button
        marginTop
        plain
        disabled={disabled}
        onClick={() => {
          dispatch(setTestUser());
        }}
      >
        はじめる
      </Button>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginPrompt;
