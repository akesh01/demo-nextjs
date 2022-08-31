import React, { useState } from 'react'
import styles from '../styles/AdminUsers.module.css'
import AddUserModal from './AddUserModal';
const SearchBar = (props:any) => {
  const [searchword,setSearchWord] = useState("")
  const [openAddModal,setOpenAddModal] = useState<boolean>(false);

  const OpenModalhandle =(e:any)=> {
            e.preventDefault();
           setOpenAddModal(!openAddModal);
           
  }
  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        {props.title}
      </div>
      <div>
        <input type="search" className={styles.inputSearch}   placeholder='Search' value={searchword}  onChange={(e:any)=> setSearchWord(e.target.value) }/>
      </div>
      <div className={styles.addUser}>
        <button onClick={OpenModalhandle}  className={styles.addbutton} style={{backgroundColor:"#262626",border:"none",width:"120px",textAlign:"center",cursor:"pointer"}}> + {props.btn}</button>
      </div>
    </div>
      <AddUserModal openModal= {openAddModal} setOpenModal ={setOpenAddModal}/>
     </>
  )
}

export default SearchBar
