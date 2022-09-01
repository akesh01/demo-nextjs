import React, { useState } from 'react'
import styles from '../styles/NewPassWord.module.css'
import {AiOutlineLeft} from 'react-icons/ai'
import { IconButton, Input, InputAdornment } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useRouter } from 'next/router';

const NewPassword = () => {
    const [firstpassword,setfirstpassword] = useState("") ;
    const [secondpassword,setSecondpassword]= useState("")
    const [passwordShown, setPasswordShown] = useState(false);
    const router = useRouter();
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };


  const handleSubmit= (e:any)=> {
    e.preventDefault();
       
    if(firstpassword === secondpassword) {
      // resetpassword
      console.log("Submitted");
      
        router.push('/PasswordReset')
    }
    else {
      alert("passwords are not matching");
      console.log("error");
      
    }

  }

const handleBack = ()=> {
      router.push("/");
}
  return (
    <div>
        <button onClick={handleBack}  style={{backgroundColor:"#F5F5F5",color:"black",border:"none"}} className={styles.backButton}><AiOutlineLeft/>Back</button>
      <div className={styles.container}>
        <p className={styles.ResetTitle}><strong>Set new password</strong></p>
        <p>Your new password must be different from  <br></br>previous used passwords</p>
        <form  onSubmit={handleSubmit}>
        <div className={styles.loginform}>
        <p>Password</p>
        <Input className={styles.textfield} 
              onChange={(e) => {e.target.value}}
              type={passwordShown?"text":"password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePassword}
                  >
                    {passwordShown ? <Visibility />:<VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
            />
         <p className={styles.message}>Minimum 8 characters with at least 1 number</p>
        <p>Password</p>
        <Input className={styles.textfield} 
              onChange={(e) => {e.target.value}}
              type={passwordShown?"text":"password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePassword}
                  >
                    {passwordShown ? <Visibility />:<VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              }
            />
          <p className={styles.message}>Both password must match</p>
          </div>
       
        
        
      <button type='submit' onClick={handleSubmit} className={styles.btn_continue}>Reset Password</button>
      </form>
      <p   onClick={handleBack} style={{cursor:"pointer"}} className={styles.cancel}>Cancel</p>
        </div> 
    </div>
  )
}

export default NewPassword
