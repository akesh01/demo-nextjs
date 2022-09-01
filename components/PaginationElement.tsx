import React, { useState } from 'react'
import styles from './PaginationElement.module.css' ;

interface PaginationProps  {
  handlePaginationLeftPage:any ;
  handlePaginationRightPage:any ;
  currentPage:number ;
  no_of_pages:number ;
  last_page:number ;
  userData:any ;
}
const PaginationElement = ({
        handlePaginationLeftPage,
        handlePaginationRightPage,
        currentPage,
        no_of_pages,
        last_page,
        userData
      }:PaginationProps) => {

     
  return (
    <td className={styles.pagination}>
            <div onClick={handlePaginationLeftPage} className={styles.paginationLeftBtn}>
              <span>
              <a href="#">❮</a>
              </span>
            </div>
            <div onClick={handlePaginationRightPage} className={styles.paginationRightBtn}>
              <span>
              <a href="#">❯</a>
              </span>
      </div>
          <div className={styles.paginationText} >
           {" "} Show {" "} 
            <span className={styles.paginationTextNumbers}>
            {(currentPage - 1) * no_of_pages +
            1 +
            "-" +
            (currentPage === last_page
              ? userData.length
              : currentPage * no_of_pages)}
            </span>
            of  {" "}
            <span className={styles.paginationTextNumbers}>
              {userData.length}
            </span>
          </div>
    </td>
  )
}

export default PaginationElement


