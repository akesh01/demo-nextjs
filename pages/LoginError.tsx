import { Input } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/LoginError.module.css' 

const LoginError = () => {
    const [email,setEmail] = useState("william.james@econsent.com");
    const [password,setPassword] = useState("password");
    const [checkpassword,SetCheckpassword] =  useState(false) ;

    const handleSubmit = (e:any)=> {
              e.preventDefault();


              if(password == "password") {
                //"password" from database
                SetCheckpassword(true);
              }else {
                SetCheckpassword(false);
              }
    }

  return (
    <div>
        <main className={styles.container}>
          <div  className={styles.card}>
          </div>
          <p className={styles.title}><strong>HEALTH</strong></p>
  
        <div className={styles.loginCard}>
         
           <form action="post"  onSubmit={handleSubmit} >
           <h2>Login</h2>
           <div className={styles.loginform}>
          <label htmlFor="email">Email</label>
           <Input type="text" size='small' id="email" value={email}  onChange={(e)=> setEmail(e.target.value)}   />
           <label htmlFor="password">password</label>
            <Input  className = "textfield" color='error' error={checkpassword} type="password" id="password"  value={password}  onChange={(e)=> setPassword(e.target.value)}  />
            </div>
            <p className={styles.message}>Minimum 8 characters with at least 1 number</p>
            <button  className={styles.btn_login}   type='submit'>Login</button>
            </form>
            <p className={styles.policy}>By signing in you agree to Health <a>Terms of Service</a> and <a>Privacy Policy</a></p>
            <p className={styles.forgotpass}>Forgot your password? </p>
        </div>
        
        </main> 
    
      </div>
  )
}

export default LoginError
