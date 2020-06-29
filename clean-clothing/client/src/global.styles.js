import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        font-weight: bold;
        padding: 20px 40px;

        @media screen and (max-width: 800px) {
            padding: 5px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
`