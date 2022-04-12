import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --body-background: #0e0e0e;
  --color-logo: #ff5b50;
  --card-color: #252525;
  --text-color: #fff;
  --subtitle-color: #5a5757;
  --black-text: #000;
  --color-input: #0D0D0D;
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html { 
  font-size: 62.5%;
  @media (max-width: 720px) {
    font-size: 58.5939%; // 9px
  }
  scroll-behavior: smooth;
}

html, body {
  height: 100%;
}


body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-size: 1.6rem;
  font-family: Montserrat;
  font-weight: 400;

  background-color: var(--body-background);
  color: var(--text-color);

}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}
button, a {
  cursor: pointer;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;
