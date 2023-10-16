import axios from 'axios';

interface Params {
  [k: string]: string | number;
}

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

export async function getFilteredPaintings(params: Params): Promise<Data | undefined> {
  try {
    const res = await axios.get('https://test-front.framework.team/paintings/', { params });

    return { paintingsFilteredOnPage: res.data, totalCountPaintings: res.headers['x-total-count'] };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error('Paintings could not be loaded...');
    }
  }

  return undefined;
}
