import React, { useState } from 'react';

import styles from './PaintingItem.module.scss';
import { useAuthors } from './useAuthors';
import { useLocations } from './useLocations';

interface Painting {
  painting: {
    authorId: number;
    created: string;
    id: number;
    imageUrl: string;
    locationId: number;
    name: string;
  };
}

interface Author {
  id: number;
  name: string;
}

interface Location {
  id: number;
  location: string;
}

function PaintingItem({ painting }: Painting): React.JSX.Element {
  const { authors, errorAuthors } = useAuthors();
  const { locations, errorLocations } = useLocations();
  const [cardOverlayClass, setCardOverlayClass] = useState('cardOverlay');

  const { imageUrl, name } = painting;

  const authorName = authors?.find((authorObj: Author) => authorObj.id === painting.authorId)?.name;
  const locationName = locations?.find(
    (locationObj: Location) => locationObj.id === painting.locationId,
  )?.location;

  const imgStyles = {
    backgroundImage: `url(https://test-front.framework.team${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={styles.cardContainer} style={imgStyles}>
      <div
        className={styles[cardOverlayClass]}
        onMouseEnter={() => setCardOverlayClass('cardOverlayHover')}
        onMouseLeave={() => setCardOverlayClass('cardOverlay')}
      >
        <h3>{name}</h3>
        <p>
          <span className={styles.cardBoldText}>Author: </span>
          <span className={styles.cardText}>
            {errorAuthors && errorAuthors instanceof Error ? errorAuthors.message : authorName}
          </span>
        </p>
        <p>
          <span className={styles.cardBoldText}>Created: </span>
          <span className={styles.cardText}>{painting.created}</span>
        </p>
        <p>
          <span className={styles.cardBoldText}>Location: </span>
          <span className={styles.cardText}>
            {errorLocations && errorLocations instanceof Error
              ? errorLocations.message
              : locationName}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PaintingItem;
