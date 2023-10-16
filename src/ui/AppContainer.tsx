import React from 'react';

import styles from './AppContainer.module.scss';

function AppContainer({ children }: React.PropsWithChildren): React.JSX.Element {
  return <div className={styles.app}>{children}</div>;
}

export default AppContainer;
