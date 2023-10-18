import React, { useState } from 'react';
import styles from './PaintingItem.module.scss';
import { useAuthors } from './useAuthors';
import { useLocations } from './useLocations';
function PaintingItem({ painting }) {
    var _a, _b;
    const { authors, errorAuthors } = useAuthors();
    const { locations, errorLocations } = useLocations();
    const [cardOverlayClass, setCardOverlayClass] = useState('cardOverlay');
    const { imageUrl, name } = painting;
    const authorName = (_a = authors === null || authors === void 0 ? void 0 : authors.find((authorObj) => authorObj.id === painting.authorId)) === null || _a === void 0 ? void 0 : _a.name;
    const locationName = (_b = locations === null || locations === void 0 ? void 0 : locations.find((locationObj) => locationObj.id === painting.locationId)) === null || _b === void 0 ? void 0 : _b.location;
    const imgStyles = {
        backgroundImage: `url(https://test-front.framework.team${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (React.createElement("div", { className: styles.cardContainer, style: imgStyles },
        React.createElement("div", { className: styles[cardOverlayClass], onMouseEnter: () => setCardOverlayClass('cardOverlayHover'), onMouseLeave: () => setCardOverlayClass('cardOverlay') },
            React.createElement("h3", null, name),
            React.createElement("p", null,
                React.createElement("span", { className: styles.cardBoldText }, "Author: "),
                React.createElement("span", { className: styles.cardText }, errorAuthors && errorAuthors instanceof Error ? errorAuthors.message : authorName)),
            React.createElement("p", null,
                React.createElement("span", { className: styles.cardBoldText }, "Created: "),
                React.createElement("span", { className: styles.cardText }, painting.created)),
            React.createElement("p", null,
                React.createElement("span", { className: styles.cardBoldText }, "Location: "),
                React.createElement("span", { className: styles.cardText }, errorLocations && errorLocations instanceof Error
                    ? errorLocations.message
                    : locationName)))));
}
export default PaintingItem;
