import React from 'react'
import  styles  from '../styles/PasswordReset.module.css'
import {AiOutlineLeft} from 'react-icons/ai'
import { useRouter } from 'next/router';


const PasswordReset = () => {
    const router = useRouter();
    const handleSubmit = (e:any)=> {
        e.preventDefault();
        router.push("/")

  }

  const handleBack = ()=> {
        router.push('/')
  }
  
  return (
    <div>
    <button style={{backgroundColor:"#F5F5F5",color:"black",border:"none"}}  onClick={handleBack}className={styles.backButton} ><AiOutlineLeft/>Back</button>
   <div className={styles.container}>
    <p className={styles.ResetTitle}><strong>Password Reset</strong></p>
   <p>Your password has been successfully reset <br></br>Click below to log in magically</p>
 <button type='submit' onClick={handleSubmit} className={styles.btncontinue}>Continue</button>
</div> 
</div>
  )
}

export default PasswordReset
