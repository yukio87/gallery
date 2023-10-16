import { useQuery } from '@tanstack/react-query';

import getLocations from '../../services/apiLocations';

interface Location {
  id: number;
  location: string;
}

interface ResponseLocations {
  isLoading: boolean;
  locations: Location[] | undefined;
  errorLocations: unknown;
}

export function useLocations(): ResponseLocations {
  const {
    isLoading,
    data: locations,
    error: errorLocations,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  });

  return { isLoading, locations, errorLocations };
}
