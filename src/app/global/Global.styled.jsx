import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

    body, input, button, textarea {
        font-size: 1rem;
        font-family: Calibri, 'Trebuchet MS', sans-serif;
    }
`;