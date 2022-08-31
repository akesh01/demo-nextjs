
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import styles from "../styles/SideBar.module.css";
import healthimage from "../assets/healthimage.png"
import healthplus from "../assets/healthplus.png";
import Image from "next/image";
import { useRouter } from "next/router";

function Sidebar({ isopen, setisopen }: any) {

   const SideBarOptions = [
    {
      title: "Admin users",
      icon: <PeopleIcon />,
      Link: "/Admin/AdminUsers",
    },
    {
      title: "Projects",
      icon: <DescriptionIcon />,
      Link: "/Admin/Project",
    },
    {
      title: "Employees",
      icon: <PersonIcon />,
      Link: "/Admin/Employees",
    },
    {
      title: "Settings",
      icon: <SettingsIcon />,
      Link: "/Admin/Settings",
    },
  ];

  const router = useRouter();


  let path = "";
  return (
    <div
      onMouseEnter={() => setisopen(true)}
      onMouseLeave={() => setisopen(false)}
      style={{
        width: isopen ? "200px" : "50px",
        paddingLeft: isopen ? "0px" : "20px",
        transition: "0.5s",
      }}
      className={styles.sidebar}
    >
      {isopen == true && (
        <Image className={styles.healthsymbol} src={healthimage} />
      )}
      {isopen == false && (
        <Image className={styles.healthplus} src={healthplus} />
      )}

      <ul className={styles.sidebarlist}>

        {SideBarOptions.map((val, key) => {
          return (
            <li
              className={styles.row}
              id={val.Link ? "active" : ""}
              key={key}
              onClick={() => {
                path = val.Link ;
                router.push(path);
               // window.location.pathname = val.Link;
              }}
            >
              <div id={styles.icon}>{val.icon}</div>
              {isopen == true && <div id={styles.title}>{val.title}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
