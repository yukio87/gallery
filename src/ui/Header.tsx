import React from 'react';

import Theme from '../features/theme/Theme';

import styles from './Header.module.scss';

function Header(): React.JSX.Element {
  return (
    <header className={styles.header}>
      <img src="../../logo.svg" alt="logo" />
      <Theme />
    </header>
  );
}

export default Header;
