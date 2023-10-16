import axios from 'axios';

interface Location {
  id: number;
  location: string;
}

export default async function getLocations(): Promise<Location[] | undefined> {
  try {
    const res = await axios.get('https://test-front.framework.team/locations');

    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error('Error fetching location data...');
    }
  }

  return undefined;
}
