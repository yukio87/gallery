import React from 'react';

import PaintingItem from './PaintingItem';
import styles from './PaintingsList.module.scss';
import { usePaintings } from './usePaintings';

function PaintingsList(): React.JSX.Element {
  const { isLoading, data, error } = usePaintings();

  if (error && error instanceof Error) return <span>{error.message}</span>;
  if (isLoading) return <span>Loading...</span>;

  return (
    <div className={styles.paintingsBox}>
      {data?.paintingsFilteredOnPage.map(painting => (
        <PaintingItem painting={painting} key={painting.id} />
      ))}
    </div>
  );
}

export default PaintingsList;
