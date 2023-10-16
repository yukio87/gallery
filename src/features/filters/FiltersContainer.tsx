import React from 'react';

import styles from './FiltersContainer.module.scss';

function FiltersContainer({ children }: React.PropsWithChildren): React.JSX.Element {
  return <div className={styles.filtersContainer}>{children}</div>;
}

export default FiltersContainer;
