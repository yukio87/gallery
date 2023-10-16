import React, { useEffect } from 'react';
import { Input, Range } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../pagination/paginationSlice';
import { getFilters, updateCreatedFrom, updateCreatedBefore, updateCreatedTitle, } from './filtersSlice';
import styles from './RangeCreated.module.scss';
function RangeCreated() {
    const dispatch = useDispatch();
    const { inputCreatedFromCurVal, inputCreatedBeforeCurVal, RangeCreatedTitle } = useSelector(getFilters);
    useEffect(() => {
        const rangeTitle = document.querySelector('.Range__title');
        if (rangeTitle !== null)
            rangeTitle.textContent = RangeCreatedTitle;
    }, [RangeCreatedTitle]);
    return (React.createElement("div", { className: styles.rangeCreated },
        React.createElement(Range, { onClose: () => dispatch(updateCreatedTitle()), isDarkTheme: false },
            React.createElement(Input, { className: styles.inputSmall, isDarkTheme: false, onChange: e => {
                    dispatch(updateCurrentPage(1));
                    dispatch(updateCreatedFrom(e.target.value));
                }, value: inputCreatedFromCurVal, placeholder: "from" }),
            React.createElement("span", { className: styles.mdash }, "\u2014"),
            React.createElement(Input, { className: styles.inputSmall, isDarkTheme: false, onChange: e => {
                    dispatch(updateCurrentPage(1));
                    dispatch(updateCreatedBefore(e.target.value));
                }, value: inputCreatedBeforeCurVal, placeholder: "before" }))));
}
export default RangeCreated;
