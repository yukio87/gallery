import React from 'react';
import styles from './AppContainer.module.scss';
function AppContainer({ children }) {
    return React.createElement("div", { className: styles.app }, children);
}
export default AppContainer;
