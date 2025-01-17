import { useEffect } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

export default function useRedirect(path = '/', condition = true, options?: NavigateOptions) {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) navigate(path, options);
  }, [navigate, condition, path, options]);
}
