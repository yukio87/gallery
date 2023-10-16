import axios from 'axios';

interface Author {
  id: number;
  name: string;
}

export default async function getAuthors(): Promise<Author[] | undefined> {
  try {
    const res = await axios.get('https://test-front.framework.team/authors');

    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error('Error fetching author data...');
    }
  }

  return undefined;
}
