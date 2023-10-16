import React from 'react';

import FiltersContainer from './FiltersContainer';
import InputName from './InputName';
import RangeCreated from './RangeCreated';
import SelectAuthor from './SelectAuthor';
import SelectLocation from './SelectLocation';

function Filters(): React.JSX.Element {
  return (
    <FiltersContainer>
      <InputName />
      <SelectAuthor />
      <SelectLocation />
      <RangeCreated />
    </FiltersContainer>
  );
}

export default Filters;
