import { Button, Input } from '@mui/material';
import React, { useState } from 'react'
import styles from '../styles/ForgotPassword.module.css' 
import {AiOutlineLeft} from 'react-icons/ai' 
import Link from 'next/link' ;
import { useRouter } from 'next/router';

const ForgotPassword = () => {
    const router = useRouter();
    const [changeEmail,setChangeEmail] = useState("");

    const handleSend  = (e:any)=>  {
      e.preventDefault();
      if(changeEmail) {
      router.push("/CheckEmail");
      }
    }

    const handleBack = () => {
      router.push("/");
    }
  return (
    <div className={styles.container}>
     
        <button  style={{backgroundColor:"#F5F5F5",color:"black",border:"none"}}className={styles.backButton} onClick={handleBack}><AiOutlineLeft/>Back</button>

        <h1 className={styles.passwordtitle}>Forgot your password</h1>
        <p className={styles.message}>Enter your email address and we'll send you an email with all the instructions</p>
        <div className={styles.formInput}>
          <div className={styles.emailInput}>
          <p className={styles.EmailTitle}>Email</p>
         <Input type="email" style={{width:"450px"}}   id="email"  placeholder='' onChange={(e)=> setChangeEmail(e.target.value)} />
         </div>
         <br />
         <div className={styles.buttonStyle}>
            <button  type="submit" className={styles.btn_intructions} onClick={handleSend}>Send me Instructions</button>
        </div>
        </div>  
        
        <p className={styles.cancel}><Link href="/"><a style={{color:"#212121"}}>Cancel</a></Link></p>

      
    </div>
  )
}

export default ForgotPassword
