import React from 'react';
import { Input } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../pagination/paginationSlice';
import { getFilters, updateName } from './filtersSlice';
import styles from './InputName.module.scss';
function InputName() {
    const dispatch = useDispatch();
    const { inputNameCurVal } = useSelector(getFilters);
    return (React.createElement(Input, { className: styles.inputName, isDarkTheme: false, value: inputNameCurVal, placeholder: "Name", onChange: e => {
            dispatch(updateCurrentPage(1));
            dispatch(updateName(e.target.value));
        } }));
}
export default InputName;
