
import React, { useEffect, useState } from 'react'
import styles from '../styles/ItemList.module.css' 
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import records from '../records.json'
import PaginationElement from './PaginationElement';
import {HiArrowDown, HiArrowUp} from 'react-icons/hi';
const ItemsList = ({ isopen, setisopen }: any) => {
 
 
  const [tableData, setTableData] = useState<Array<any>>(records);
  const [currentPageData,setCurrentPageData] = useState<Array<any>>([]);
  const [currentPage,setCurrentPage] = useState(1);
      const no_of_pages = 15 ;
      const last_page = Math.ceil(tableData.length /no_of_pages) ;

  useEffect(() => {
    setCurrentPageData([
      ...tableData.slice (
        (currentPage-1)*no_of_pages,
        currentPage* no_of_pages)
    ])
  },[currentPage]) ;


  const handlePaginationLeft = ()=> {
    if(currentPage === 1) 
        return ;
    else {
      setCurrentPage((prev)=> prev- 1)
      console.log("Page no decreased");
      
    }

  }

  const handlePaginationRight = ()=> { 
    if(currentPage === last_page) 
     return ;
  else {
    setCurrentPage((prev)=> prev + 1)
    console.log("Page no decreased");
  }
  }
  const handleClick = ()=> {
    console.log("clicked on Icon");
    
  }
  
  return (
    <>
    <div style={{ marginTop: "150px", marginRight: "100px",backgroundColor:"#FFFFFF" }}>
    <table
      style={{
        marginLeft: isopen ? "14rem" : "7rem",
        transition: "0.5s",
        width: isopen ? "85%" : "90%",
      }} 
      className={styles.table}
    >
      <thead style={{ backgroundColor: "#F3F4F6", height: "46px" }}>
        <tr
          style={{
            color: "#4B5563",
            display: "table-row",
            paddingLeft: "20px", 
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "150%",
            backgroundColor: "#F3F4F6",
            scrollbarWidth:"thin",
          }}
        >
          <th style={{ width: "14px", color:" #9CA3AF" }}>
            <CheckBoxOutlineBlankIcon />
          </th>
          <th style={{ width: "120px", padding: "20px",flexDirection:"row" }} scope="col">
            User id
             <span><HiArrowUp/></span>
             <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "120px", padding: "20px" }} scope="col">
            Name
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "220px", padding: "20px" }} scope="col">
            Email
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "140px", padding: "20px" }} scope="col">
            Phone
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "90px", padding: "20px" }} scope="col">
            Roles
            <span><HiArrowUp/></span>
              <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "105px", padding: "20px" }} scope="col">
            Status
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
        
          <th style={{ width: "55px", padding: "20px" }} scope="col" >
            Options
          </th>
        </tr>
      </thead>
      <tbody style={{
            backgroundColor:"#FFFFFF",
            color:"#111928",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "150%",
          }}>
        {currentPageData.map((user, index): any => (
          <tr key={index}>
            <td>
              <CheckBoxOutlineBlankIcon style={{ marginLeft: "5px",color: "#9CA3AF" }} />
            </td>
            <td style={{ paddingLeft: "40px" }}>{user.id}</td>
            <td style={{ paddingLeft: "40px" }}>{user.name}</td>
            <td style={{ paddingLeft: "130px" }}>{user.email}</td>
            <td style={{ paddingLeft: "20px" }}> {user.Phone}</td>
            <td style={{ paddingLeft: "30px" }}>
              <button className={styles.adminroles}>Admin</button>
            </td>
            <td>{user.status}</td>
            <td>
              <MoreVertIcon className={styles.Icon} onClick={handleClick} style={{ marginLeft: "50px" }} />
            </td>

          </tr>
        
        ))}
      </tbody>
      <tfoot>
        <tr>
        <PaginationElement 
        handlePaginationLeftPage = {handlePaginationLeft}
        handlePaginationRightPage = {handlePaginationRight}
        currentPage = {currentPage}
        no_of_pages = {no_of_pages}
        last_page = {last_page}
        userData = {tableData}
        />
        </tr>
      </tfoot>
    </table>
  </div>
  </>
  )
}
  
export default ItemsList;