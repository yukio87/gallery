import React from 'react';
import PaintingItem from './PaintingItem';
import styles from './PaintingsList.module.scss';
import { usePaintings } from './usePaintings';
function PaintingsList() {
    const { isLoading, data, error } = usePaintings();
    if (error && error instanceof Error)
        return React.createElement("span", null, error.message);
    if (isLoading)
        return React.createElement("span", null, "Loading...");
    return (React.createElement("div", { className: styles.paintingsBox }, data === null || data === void 0 ? void 0 : data.paintingsFilteredOnPage.map(painting => (React.createElement(PaintingItem, { painting: painting, key: painting.id })))));
}
export default PaintingsList;
