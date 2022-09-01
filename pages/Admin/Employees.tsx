import { List, TablePagination } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react'
import EmployeeItemsList from '../../components/Employeees/EmployeeItemsList';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import Topbar from '../../components/Topbar';
import styles from '../../styles/Adminusers.module.css'

const Employees = () => {
  const [currenPageNo,setCurrentPageNo] = useState(1);
  const [isopen, setisopen] = useState(false);
  const no_of_pages = 15 ;
  const handlePageChange = (e:any)=> {
        setCurrentPageNo(e.target.value);
  }
  return (
    <>
      <Topbar/>

      <SearchBar title="Employees" btn="Add Employees" />
      <div className={styles.sidebar}>
        <SideBar isopen={isopen} setisopen={setisopen}/>
       </div>
      <div>
        <EmployeeItemsList  isopen={isopen} setisopen={setisopen}/>
      </div>  
      
    <div>
      
    </div>
    </>
  )
}

export default Employees ;
