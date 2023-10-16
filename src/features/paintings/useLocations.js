import { useQuery } from '@tanstack/react-query';
import getLocations from '../../services/apiLocations';
export function useLocations() {
    const { isLoading, data: locations, error: errorLocations, } = useQuery({
        queryKey: ['locations'],
        queryFn: getLocations,
    });
    return { isLoading, locations, errorLocations };
}
