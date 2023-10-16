import React, { useEffect } from 'react';

import { Input, Range } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentPage } from '../pagination/paginationSlice';

import {
  getFilters,
  updateCreatedFrom,
  updateCreatedBefore,
  updateCreatedTitle,
} from './filtersSlice';
import styles from './RangeCreated.module.scss';

function RangeCreated(): React.JSX.Element {
  const dispatch = useDispatch();
  const { inputCreatedFromCurVal, inputCreatedBeforeCurVal, RangeCreatedTitle } =
    useSelector(getFilters);

  useEffect(() => {
    const rangeTitle = document.querySelector('.Range__title');

    if (rangeTitle !== null) rangeTitle.textContent = RangeCreatedTitle;
  }, [RangeCreatedTitle]);

  return (
    <div className={styles.rangeCreated}>
      <Range onClose={() => dispatch(updateCreatedTitle())} isDarkTheme={false}>
        <Input
          className={styles.inputSmall}
          isDarkTheme={false} // Реализовал по-другому, возможно нужно переделать
          onChange={e => {
            dispatch(updateCurrentPage(1));
            dispatch(updateCreatedFrom(e.target.value));
          }}
          value={inputCreatedFromCurVal}
          placeholder="from"
        />
        <span className={styles.mdash}>&mdash;</span>
        <Input
          className={styles.inputSmall}
          isDarkTheme={false} // Реализовал по-другому, возможно нужно переделать
          onChange={e => {
            dispatch(updateCurrentPage(1));
            dispatch(updateCreatedBefore(e.target.value));
          }}
          value={inputCreatedBeforeCurVal}
          placeholder="before"
        />
      </Range>
    </div>
  );
}

export default RangeCreated;
