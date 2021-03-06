import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
    box-sizing:border-box;
    }
    body {
    margin: 0;
    color: ${({ theme }) => theme.color.woodsmoke};
    background-color: ${({ theme }) => theme.color.white};
    font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
