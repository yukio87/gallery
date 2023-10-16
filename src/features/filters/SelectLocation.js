import React from 'react';
import { Select } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../pagination/paginationSlice';
import { useLocations } from '../paintings/useLocations';
import { getFilters, updateLocationId, updateLocation } from './filtersSlice';
import styles from './SelectLocation.module.scss';
function SelectLocation() {
    const { selectLocationCurVal } = useSelector(getFilters);
    const dispatch = useDispatch();
    const { isLoading, locations, errorLocations } = useLocations();
    function handleChange(location) {
        var _a;
        const locationId = (_a = locations === null || locations === void 0 ? void 0 : locations.find((locationObj) => locationObj.location === location)) === null || _a === void 0 ? void 0 : _a.id;
        if (locationId) {
            dispatch(updateLocationId(locationId));
            dispatch(updateLocation(location));
            dispatch(updateCurrentPage(1));
        }
    }
    function handleClick() {
        dispatch(updateLocationId(0));
        dispatch(updateLocation('Location'));
        dispatch(updateCurrentPage(1));
    }
    if (errorLocations && errorLocations instanceof Error) {
        return React.createElement("span", null, errorLocations.message);
    }
    const locationsEdited = locations === null || locations === void 0 ? void 0 : locations.map((locationObj) => ({
        id: locationObj.id,
        name: locationObj.location,
    }));
    return (React.createElement("div", { className: styles.selectContainer },
        React.createElement(Select, { className: styles.selectLocation, isDarkTheme: false, disabled: isLoading, options: locationsEdited, value: selectLocationCurVal, onChange: location => handleChange(location) }),
        selectLocationCurVal !== 'Location' ? (React.createElement(React.Fragment, null,
            React.createElement("svg", { className: styles.svg },
                React.createElement("symbol", { id: "ic-1" },
                    React.createElement("path", { d: "M1.36474 0.218926C1.07355 -0.075661 0.601435 -0.0756609 0.310246 0.218926C0.0190565 0.513513 0.0190565 0.991134 0.310246 1.28572L2.25004 3.24815C2.63511 3.63771 2.63511 4.26457 2.25004 4.65413L0.216439 6.71146C-0.0747505 7.00604 -0.0747505 7.48366 0.216439 7.77825C0.507628 8.07284 0.97974 8.07284 1.27093 7.77825L3.28821 5.73743C3.67966 5.34142 4.31917 5.34142 4.71061 5.73743L6.72779 7.77815C7.01898 8.07274 7.49109 8.07274 7.78228 7.77815C8.07347 7.48356 8.07347 7.00594 7.78228 6.71136L5.74879 4.65413C5.36371 4.26457 5.36372 3.63771 5.74879 3.24814L7.68848 1.28582C7.97966 0.991235 7.97967 0.513615 7.68848 0.219027C7.39729 -0.0755597 6.92517 -0.0755594 6.63399 0.219027L4.71061 2.16485C4.31917 2.56086 3.67966 2.56086 3.28821 2.16485L1.36474 0.218926Z", fill: "black" }))),
            React.createElement("svg", { onClick: handleClick, className: styles.close, viewBox: "0 0 8 8" },
                React.createElement("use", { className: styles.ic1, xlinkHref: "#ic-1", x: "0", y: "0" })))) : ('')));
}
export default SelectLocation;
