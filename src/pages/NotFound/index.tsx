import notFoundPageBackground from '@assets/images/notFoundPageBackground.png';
import { ErrorLayout } from '@components/ErrorLayout';

export const NotFoundPage = () => {
  return <ErrorLayout title="Page was not found" info="Sorry, the page cant be found" icon={notFoundPageBackground} />;
};
