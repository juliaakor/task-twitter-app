import { LayoutPage } from '@pages/Layout';

import { LayoutWrapperProps } from './types';

export const LayoutWrapper = ({ Component }: LayoutWrapperProps): JSX.Element => (
  <LayoutPage>
    <Component />
  </LayoutPage>
);
