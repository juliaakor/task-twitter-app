import { createGlobalStyle } from 'styled-components';

import { resetStyles } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${resetStyles}
`;
