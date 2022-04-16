import React from 'react'
import { getPagesArray } from '../../../utils/pages';
import MyButton from '../button/MyButton';
import classes from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePage }) => {
   let pagesArray = getPagesArray(totalPages);
   return (
      <div className={classes.paginationWrapper}>
         {pagesArray.map(p =>
            <MyButton key={p} onClick={() => changePage(p)}><span style={page === p ? { color: '#0277bd' } : { color: 'white' }}>{p}</span></MyButton>
         )}
      </div>
   )
}

export default Pagination