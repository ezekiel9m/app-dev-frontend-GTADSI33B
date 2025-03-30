import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body {
        width: 100vw;
        height: 100vh; 
        background-color: #f4f4f4;
        font-family: -apple-system, "Roboto", BlinkMacSystemFont, "SF Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
`;

export default GlobalStyle; 

export const FontFamily = "Roboto, Helvetica, BlinkMacSystemFont, Arial, sans-serif";
