
import React, { useEffect, useState } from 'react'
import styles from '../../styles/ItemList.module.css' 
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import records from '../../ProjectType.json';
import PaginationElement from '../PaginationElement';
import {HiArrowDown, HiArrowUp} from 'react-icons/hi';
const EmployeeTypeList = ({ isopen, setisopen }: any) => {
 

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

  
  return (
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
            <CheckBoxOutlineBlankIcon  />
          </th>
          <th style={{ width: "120px", padding: "20px" }} scope="col">
            Name
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "90px", padding: "20px" }} scope="col">
            description
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
          <th style={{ width: "100px", padding: "20px" }} scope="col">
            Status
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
          </th>
         
          <th style={{ width: "55px", padding: "20px" }} scope="col">
            Options
            <span><HiArrowUp/></span>
            <span><HiArrowDown/></span>
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
              <CheckBoxOutlineBlankIcon style={{ marginLeft: "5px" }} />
            </td>
            <td style={{ paddingLeft: "40px" }}>{user.name}</td>
            <td style={{ paddingLeft: "40px" }}>{user.description}</td>
            <td style={{ paddingLeft: "90px" }}>{user.status}</td>
            <td>
              <MoreVertIcon style={{ marginLeft: "50px" }} />
            </td>
          </tr>
        ))}
      </tbody>
      <PaginationElement
        handlePaginationLeftPage = {handlePaginationLeft}
        handlePaginationRightPage = {handlePaginationRight}
        currentPage = {currentPage}
        no_of_pages = {no_of_pages}
        last_page = {last_page}
        userData = {tableData}
        />
    </table>
  </div>
    
  )
}
  
export default EmployeeTypeList;