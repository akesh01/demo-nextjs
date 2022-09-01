

import { List, TablePagination } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar';
import EmployeeTypeList from '../../components/Settings/EmployeeTypeList';
import SideBar from '../../components/SideBar';
import Topbar from '../../components/Topbar';
import styles from '../../styles/Adminusers.module.css'

const EmployeeType = () => {
  const [currenPageNo,setCurrentPageNo] = useState(1);
  const [isopen, setisopen] = useState<boolean>(false);
  return (
    <>
      <Topbar/>

      <SearchBar title="Employee Type" btn="Add Employee Type"/>
      <div className={styles.sidebar}>
        <SideBar isopen={isopen} setisopen={setisopen}/>
       </div>
      <div>
        <EmployeeTypeList isopen={isopen} setisopen={setisopen}/>
      </div>  
     
    <div>
      
    </div>
    </>
  )
}

export default EmployeeType ;
