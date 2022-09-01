import { List, TablePagination } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react'
import ProjectItemsList from '../../components/projects/ProjectItemsList';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import Topbar from '../../components/Topbar';
import styles from '../../styles/Adminusers.module.css'

const Project = () => {
  const [currenPageNo,setCurrentPageNo] = useState(1);
  const [isopen, setisopen] = useState(false);
  const no_of_pages = 15 ;
  const handlePageChange = (e:any)=> {
        setCurrentPageNo(e.target.value);
  }
  
  return (
    <>
      <Topbar/>

      <SearchBar title="Projects"  btn="Add project"/>
      <div className={styles.sidebar}>
        <SideBar isopen={isopen} setisopen={setisopen}/>
       </div>
      <div>
        <ProjectItemsList isopen={isopen} setisopen={setisopen}/>
      </div>  
    <div>
      
    </div>
    </>
  )
}

export default Project ;
