import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Nunito, sans-serif;
}

body {
  background: ${({ theme }) => theme.COLORS["base-background"]};
  height: 100vh;
}

a {
   text-decoration: none;
}
`