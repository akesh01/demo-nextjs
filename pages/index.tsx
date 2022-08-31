import { Button, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import styles from '../styles/Login.module.css' 
import Link from 'next/link' ;
import healthimage from "../assets/healthimage.png"
import healthplus from "../assets/healthplus.png";
import  { useRouter } from 'next/router';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Image from 'next/image';


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const router = useRouter();
  const handleSubmit =(e:any)=> {
    e.preventDefault();
    console.log("clicked");
    // post username and password to api
    const formData = {
      Email : email,
      Password : password,
    }
    console.log(formData);
    
    fetch('/api/hello', {
      method :"POST" ,
     
      body : JSON.stringify(formData),
    })
    .then((respone)=> respone.json() )
    .then((data) => {
      console.log("Logged In Succesfully:",data);
      router.push('Admin/AdminUsers');

    })
    .catch((error) => {
      console.error("Error:",error); 
    })


    setEmail('');
    setPassword('');
  } 

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  // const validatePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
  //   const re =/\d/;
  //   if(re.test(e.target.value) && e.target.value!="")
  //   {
  //     setPassword(e.target.value);
  //   }
  // };

  

  return (
    <div>
      <main className={styles.container}>
        <div  className={styles.card}>
        <div className={styles.image}>
        <Image  src={healthplus} width="36px" height="36px"/>
        </div>
      
        <p className={styles.title}><strong>HEALTH</strong></p>
        </div>
       <div className={styles.loginCard}>
       
         <form action=""  onSubmit={handleSubmit} >
         <h2>Login</h2>
         <div className={styles.loginform}>

        <p>Email</p>
        <Input  className={styles.textfield}  type="email"  endAdornment={
                <InputAdornment position="end">
                  <IconButton
                  >
                  </IconButton>
                </InputAdornment>
              }  onChange={(e)=> {setEmail(e.target.value)}}/>
         <label htmlFor="password">password</label>
          {/* <Input type="password" id="password"  placeholder=''  onChange={(e)=> {setPassword(e.target.value)}}/> */}
          </div>
          <Input  style = {{color:(password.length >7)?"black":"red"}} className={styles.textfield} 
              onChange={(e) => {setPassword(e.target.value)}}
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
          <button  style={{backgroundColor:!(password && email)?"#D2D3D9":"#1996FC",color:"#ffffff"}}  className={styles.btn_login} disabled={!password? true :false}   type='submit'>Log in</button>
          </form>
          <p className={styles.policy}>By signing in you agree to Health <Link href="/terms"><a >Terms of Service</a></Link> and <Link href="/privacypolicy"><a>Privacy Policy</a></Link></p>
          <p className={styles.forgotpass}><Link href="/ForgotPassword"><a>Forgot your password?</a></Link></p>
      </div>
      
      </main> 
  
    </div>
  )
}

export default Login
