import { useParams } from 'react-router-dom';

import { UserPicturesPreview } from '@/components/UserPicturesPreview';
import { Footer } from '@components/Footer';
import { Search } from '@components/Search';
import { SuggestionsSection } from '@components/SuggestionsSection';
import { UserIdRoute } from '@type/routes';

import { RightSidebarContainer } from './styled';

export const RightSidebar = () => {
  const { id } = useParams<UserIdRoute>();

  return (
    <RightSidebarContainer>
      <Search userId={id} />
      {id && <UserPicturesPreview id={id} />}
      <SuggestionsSection />
      <Footer isFullView={false} />
    </RightSidebarContainer>
  );
};
