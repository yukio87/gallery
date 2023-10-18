import React from 'react';
import { Pagination } from 'fwt-internship-uikit';
import { useDispatch, useSelector } from 'react-redux';
import { PAGE_SIZE } from '../../utils/constants';
import { usePaintings } from '../paintings/usePaintings';
import styles from './Pag.module.scss';
import { getCurrentPage, updateCurrentPage } from './paginationSlice';
function Pag() {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const { data } = usePaintings();
    if (!data)
        return null;
    const pagesAmount = Math.ceil(data.totalCountPaintings / PAGE_SIZE);
    if (pagesAmount <= 1)
        return null;
    return (React.createElement("div", { className: styles.pagination },
        React.createElement(Pagination, { pagesAmount: pagesAmount, currentPage: currentPage, onChange: curPage => dispatch(updateCurrentPage(curPage)) })));
}
export default Pag;
