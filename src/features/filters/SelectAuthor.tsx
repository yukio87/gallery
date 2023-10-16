import React from 'react';

import { Select } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentPage } from '../pagination/paginationSlice';
import { useAuthors } from '../paintings/useAuthors';

import { getFilters, updateAuthorId, updateAuthorName } from './filtersSlice';
import styles from './SelectAuthor.module.scss';

interface Author {
  id: number;
  name: string;
}

function SelectAuthor(): React.JSX.Element {
  const { selectAuthorNameCurVal } = useSelector(getFilters);
  const dispatch = useDispatch();

  const { isLoading, authors, errorAuthors } = useAuthors();

  function handleChange(name: string): void {
    const authorId = authors?.find((authorObj: Author) => authorObj.name === name)?.id;

    if (authorId) {
      dispatch(updateAuthorId(authorId));
      dispatch(updateAuthorName(name));
      dispatch(updateCurrentPage(1));
    }
  }

  function handleClick(): void {
    dispatch(updateAuthorId(0));
    dispatch(updateAuthorName('Author'));
    dispatch(updateCurrentPage(1));
  }

  if (errorAuthors && errorAuthors instanceof Error) return <span>{errorAuthors.message}</span>;

  return (
    <div className={styles.selectContainer}>
      <Select
        className={styles.selectAuthor}
        isDarkTheme={false} // Реализовал по-другому, возможно нужно переделать
        disabled={isLoading}
        options={authors!}
        value={selectAuthorNameCurVal}
        onChange={name => handleChange(name)}
      />
      {selectAuthorNameCurVal !== 'Author' ? (
        <>
          <svg className={styles.svg}>
            <symbol id="ic-1">
              <path
                d="M1.36474 0.218926C1.07355 -0.075661 0.601435 -0.0756609 0.310246 0.218926C0.0190565 0.513513 0.0190565 0.991134 0.310246 1.28572L2.25004 3.24815C2.63511 3.63771 2.63511 4.26457 2.25004 4.65413L0.216439 6.71146C-0.0747505 7.00604 -0.0747505 7.48366 0.216439 7.77825C0.507628 8.07284 0.97974 8.07284 1.27093 7.77825L3.28821 5.73743C3.67966 5.34142 4.31917 5.34142 4.71061 5.73743L6.72779 7.77815C7.01898 8.07274 7.49109 8.07274 7.78228 7.77815C8.07347 7.48356 8.07347 7.00594 7.78228 6.71136L5.74879 4.65413C5.36371 4.26457 5.36372 3.63771 5.74879 3.24814L7.68848 1.28582C7.97966 0.991235 7.97967 0.513615 7.68848 0.219027C7.39729 -0.0755597 6.92517 -0.0755594 6.63399 0.219027L4.71061 2.16485C4.31917 2.56086 3.67966 2.56086 3.28821 2.16485L1.36474 0.218926Z"
                fill="black"
              />
            </symbol>
          </svg>

          <svg onClick={handleClick} className={styles.close} viewBox="0 0 8 8">
            <use className={styles.ic1} xlinkHref="#ic-1" x="0" y="0" />
          </svg>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default SelectAuthor;
