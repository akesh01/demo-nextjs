

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
      <Topbar/>

      <SearchBar title="Project Type" btn="Add Project Type"/>
      <div className={styles.sidebar}>
        <SideBar isopen={isopen} setisopen={setisopen}/>
       </div>
      <div>
        <SkillsList/>
      </div>  
    
    <div>
      
    </div>
    </>
  )
}

export default Skills ;
