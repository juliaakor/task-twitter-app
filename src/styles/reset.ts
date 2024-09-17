import { css } from 'styled-components';

const scrollbarSize = '0.75rem';
const scrollbarThumbColor = 'rgb(136, 136, 136)';
const scrollbarThumbColorHover = 'rgb(163, 163, 163)';
const scrollbarTrackColor = 'rgb(241, 241, 241)';

export const resetStyles = css`
  html {
    ${({ theme }) => `
      height: ${theme.size.full};
      background: ${theme.colors.bgPrimary};
    `}

    font-size: calc(8px + 0.39vw);
  }

  * {
    ${({ theme }) => `
      margin: ${theme.spacing.none};
      padding: ${theme.spacing.none};
      outline: ${theme.spacing.none};
      font-family: ${theme.fontFamily.primary}, ${theme.fontFamily.secondary}, sans-serif;
      color: ${theme.colors.textPrimary};
    `}

    box-sizing: border-box;
    transition: all 0.4s ease-out;
  }

  #root {
    ${({ theme }) => `
      margin: ${theme.spacing.none} auto;
    `}

    isolation: isolate;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;

    ${({ theme }) => `
      max-width: ${theme.size.full};
      max-height: ${theme.size.full};
    `}
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ::-webkit-scrollbar {
    width: ${scrollbarSize};
    height: ${scrollbarSize};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbarThumbColor};
    border: 2px solid ${scrollbarThumbColorHover};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${scrollbarThumbColorHover};
  }

  ::-webkit-scrollbar-track {
    background: ${scrollbarTrackColor};
  }
`;
