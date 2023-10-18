import React from 'react';
import styles from './FiltersContainer.module.scss';
function FiltersContainer({ children }) {
    return React.createElement("div", { className: styles.filtersContainer }, children);
}
export default FiltersContainer;
