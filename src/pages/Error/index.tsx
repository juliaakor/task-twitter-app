import errorPageBackground from '@assets/images/errorPageBackground.webp';
import { ErrorLayout } from '@components/ErrorLayout';

export const ErrorPage = () => {
  return (
    <ErrorLayout
      title="Error"
      info="Whoops, there's been some kind of error. Try reloading the page or going back. Contact support if the error occurs again"
      icon={errorPageBackground}
    />
  );
};
