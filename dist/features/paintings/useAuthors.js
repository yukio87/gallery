import { useQuery } from '@tanstack/react-query';
import getAuthors from '../../services/apiAuthors';
export function useAuthors() {
    const { isLoading, data: authors, error: errorAuthors, } = useQuery({
        queryKey: ['authors'],
        queryFn: getAuthors,
    });
    return { isLoading, authors, errorAuthors };
}
