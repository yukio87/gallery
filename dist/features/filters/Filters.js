import React from 'react';
import FiltersContainer from './FiltersContainer';
import InputName from './InputName';
import RangeCreated from './RangeCreated';
import SelectAuthor from './SelectAuthor';
import SelectLocation from './SelectLocation';
function Filters() {
    return (React.createElement(FiltersContainer, null,
        React.createElement(InputName, null),
        React.createElement(SelectAuthor, null),
        React.createElement(SelectLocation, null),
        React.createElement(RangeCreated, null)));
}
export default Filters;
