import React from 'react'
import styles from '../styles/Checkmail.module.css'
import {AiOutlineLeft} from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CheckEmail = () => {
  const router = useRouter();
  const handleBack = ()=> {
      router.push('/ForgotPassword')
  }
  return (
        <div>
        <button  style={{backgroundColor:"#F5F5F5",color:"black",border:"none"}} className={styles.backButton} onClick={handleBack}><AiOutlineLeft/>Back</button>
    <div className={styles.container}>
      <p className={styles.emailTitle}><strong>Check your email</strong></p>
      <p>We sent a password reset link to<br></br> <strong>bingwen@hotmail.com</strong></p>
      <p></p>
      <p>Didn't receive the email? <Link href='/ForgotPassword'><a>Click to resend</a></Link></p>
    </div> 
    </div>

  )
}

export default CheckEmail
