import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { getFilteredPaintings } from '../../services/apiPaintings';
import { PAGE_SIZE } from '../../utils/constants';
import { getFilters } from '../filters/filtersSlice';
import { getCurrentPage } from '../pagination/paginationSlice';

interface Painting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

interface Data {
  paintingsFilteredOnPage: Painting[];
  totalCountPaintings: number;
}

interface ResponsePaintings {
  isLoading: boolean;
  data: Data | undefined;
  error: unknown;
}

export function usePaintings(): ResponsePaintings {
  const queryClient = useQueryClient();
  const currentPage = useSelector(getCurrentPage);
  const {
    inputNameCurVal,
    selectAuthorIdCurVal,
    selectLocationIdCurVal,
    inputCreatedFromCurVal,
    inputCreatedBeforeCurVal,
  } = useSelector(getFilters);

  const filters = {
    name: inputNameCurVal,
    authorId: selectAuthorIdCurVal,
    locationId: selectLocationIdCurVal,
    created_gte: inputCreatedFromCurVal,
    created_lte: inputCreatedBeforeCurVal,
    _page: currentPage,
    _limit: PAGE_SIZE,
  };

  const params = Object.fromEntries(Object.entries(filters).filter(entry => entry[1]));

  const { isLoading, data, error } = useQuery({
    queryKey: ['filteredPaintings', params],
    queryFn: () => getFilteredPaintings(params),
  });

  // PRE-FETCHING NEXT PAGE
  const prefetchedNextPageFilters = { ...params, _page: currentPage + 1 };

  if (!isLoading && data) {
    const pagesAmount: number = Math.ceil(data.totalCountPaintings / PAGE_SIZE);

    if (currentPage < pagesAmount) {
      queryClient.prefetchQuery({
        queryKey: ['filteredPaintings', prefetchedNextPageFilters],
        queryFn: () => getFilteredPaintings(prefetchedNextPageFilters),
      });
    }
  }

  return { isLoading, data, error };
}
