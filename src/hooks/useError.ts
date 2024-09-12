import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

export const useError = () => {
  const navigate = useNavigate();

  const errorHandler = () => navigate(ROUTES.ERROR_OCCURRED);

  return { errorHandler };
};
