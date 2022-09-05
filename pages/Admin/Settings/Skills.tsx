

import { List } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react'
import SearchBar from '../../../components/SearchBar';
import SkillsList from '../../../components/Settings/SkillsList';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/Topbar';
import styles from '../../../styles/Adminusers.module.css'

const Skills = () => {
  const [currenPageNo,setCurrentPageNo] = useState(1);
  const [isopen, setisopen] = useState(false);
  const no_of_pages = 15 ;
  const handlePageChange = (e:any)=> {
        setCurrentPageNo(e.target.value);
  }
  return (
    <>
    <div style={{backgroundColor:"#FFFFFF"}}>
      <Topbar/>

      <SearchBar title="Skills" btn="Add Skills"/>
      <div className={styles.sidebar}>
        <SideBar isopen={isopen} setisopen={setisopen}/>
       </div>
      <div>
        <SkillsList/>
      </div>  
    
    <div>
      
    </div>
    </div>
    </>
  )
}

export default Skills ;
