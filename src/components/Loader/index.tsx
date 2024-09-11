import { LoaderWrapper, LoaderContainer } from './styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        {[1, 2, 3, 4].map((val) => (
          <div key={val} />
        ))}
      </LoaderContainer>
    </LoaderWrapper>
  );
};
