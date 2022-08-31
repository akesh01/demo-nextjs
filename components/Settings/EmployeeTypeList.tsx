
import React, { useEffect, useState } from 'react'
import styles from '../../styles/ItemList.module.css' 
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import records from '../../projectType.json';
import PaginationElement from '../PaginationElement';
const EmployeeTypeList = () => {
 
  const [isopen, setisopen] = useState(false);
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
    <div style={{ marginTop: "150px", marginRight: "100px" }}>
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
            color: "black",
            display: "table-row",
            paddingLeft: "20px",
          }}
        >
          <th style={{ width: "14px" }}>
            <CheckBoxOutlineBlankIcon />
          </th>
          <th style={{ width: "120px", padding: "20px" }} scope="col">
            Name
          </th>
          <th style={{ width: "90px", padding: "20px" }} scope="col">
            description
          </th>
          <th style={{ width: "200px", padding: "20px" }} scope="col">
            Status
          </th>
         
          <th style={{ width: "55px", padding: "20px" }} scope="col">
            Options
          </th>
        </tr>
      </thead>
      <tbody>
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