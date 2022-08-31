import Image from 'next/image'
import React from 'react'
import avatar from '../assets/Avatar.png'
import BellIcon from '../assets/VectorIconBell.png'
import styles from '../styles/AdminUsers.module.css'

const Topbar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarRight}>
        <div className={styles.BellIcon}>
            <Image src={BellIcon} alt ="BellIcon"  width="16.8px" height="19.2px"/>
        </div>
        <div className={styles.avatar}>
        <Image src={avatar} alt='Avatar' width="32px" height="32px"/>
        </div>
      </div>  
    </div>
  )
}

export default Topbar;
