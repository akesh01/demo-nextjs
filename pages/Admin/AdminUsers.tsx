import { List } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react'
import AddUserModal from '../../components/AddUserModal';
import ItemsList from '../../components/ItemsList';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import Topbar from '../../components/Topbar';
import styles from '../../styles/Adminusers.module.css'

const AdminUsers = () => {
  const [currenPageNo,setCurrentPageNo] = useState(1);
  const [isopen, setisopen] = useState(false);
  const [openAddModal,setOpenAddModal] = useState<boolean>(false);
  const handlePageChange = (e:any)=> {
        setCurrentPageNo(e.target.value);
  }

 
  return (
    <>
      <Topbar/>
      <SearchBar title="Admin Users" btn="Add Users" openModal= {openAddModal} setOpenModal ={setOpenAddModal}/>
      <div className={styles.sidebar}>
        <SideBar isopen={isopen} setisopen={setisopen}/>
       </div>
      <div>
        <ItemsList />
      </div> 
    <AddUserModal openModal= {openAddModal} setOpenModal ={setOpenAddModal}/>
    </>
  )
}

export default AdminUsers ;
