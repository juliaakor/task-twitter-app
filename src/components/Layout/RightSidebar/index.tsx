import { Footer } from '@components/Footer';

import { RightSidebarContainer } from './styled';

export const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <Footer isFullView={false} />
    </RightSidebarContainer>
  );
};
