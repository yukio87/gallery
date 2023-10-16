import React from 'react';

import { Input } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentPage } from '../pagination/paginationSlice';

import { getFilters, updateName } from './filtersSlice';
import styles from './InputName.module.scss';

function InputName(): React.JSX.Element {
  const dispatch = useDispatch();
  const { inputNameCurVal } = useSelector(getFilters);

  return (
    <Input
      className={styles.inputName}
      isDarkTheme={false} // Реализовал по-другому, возможно нужно переделать
      value={inputNameCurVal}
      placeholder="Name"
      onChange={e => {
        dispatch(updateCurrentPage(1));
        dispatch(updateName(e.target.value));
      }}
    />
  );
}

export default InputName;
