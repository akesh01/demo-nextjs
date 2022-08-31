import React from 'react'
import  styles  from '../styles/PasswordReset.module.css'
import {AiOutlineLeft} from 'react-icons/ai'

const PasswordReset = () => {
  return (
    <div>
    <button className={styles.backButton}><AiOutlineLeft/>Back</button>
   <div className={styles.container}>
    <p className={styles.ResetTitle}><strong>Password Reset</strong></p>
   <p>Your password has been successfully reset <br></br>Click below to log in magically</p>
 <button type='submit' onClick={PasswordReset} className={styles.btncontinue}>Continue</button>
</div> 
</div>
  )
}

export default PasswordReset
