import { useQuery } from '@tanstack/react-query';

import getAuthors from '../../services/apiAuthors';

interface Author {
  id: number;
  name: string;
}

interface ResponseAuthors {
  isLoading: boolean;
  authors: Author[] | undefined;
  errorAuthors: unknown;
}

export function useAuthors(): ResponseAuthors {
  const {
    isLoading,
    data: authors,
    error: errorAuthors,
  } = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthors,
  });

  return { isLoading, authors, errorAuthors };
}
