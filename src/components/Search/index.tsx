import { ChangeEvent, useEffect, useState } from 'react';

import { SearchIcon } from '@/assets/icons/searchIcon';
import { useDebounce } from '@/hooks/useDebounce';
import { useTweets } from '@/hooks/useTweets';
import { useUser } from '@/hooks/useUser';
import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { TweetsList } from '@components/TweetsList';

import { Input, SearchContainer, SearchIconContainer, SearchItem } from './styled';
import { SearchProps } from './types';

export const Search = ({ userId }: SearchProps) => {
  const { searchTweets, searchTweetsByUser } = useTweets();
  const { searchUsers } = useUser();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    searchUsers(debouncedQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userId) {
      searchTweetsByUser(debouncedQuery, userId);

      return;
    }
    searchUsers(debouncedQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, userId]);

  const handleFocus = () => userId && setIsOpen(true);
  const handleCloseTweets = () => setIsOpen(false);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <SearchItem>
      <OutsideClickProvider onOutsideClick={handleCloseTweets}>
        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <Input
            type="text"
            placeholder={userId ? 'Search Tweets' : 'Search Twitter'}
            value={query}
            onChange={handleQueryChange}
            onFocus={handleFocus}
          />
        </SearchContainer>
        {isOpen && <TweetsList tweets={searchTweets} />}
      </OutsideClickProvider>
    </SearchItem>
  );
};
