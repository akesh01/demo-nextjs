import { Button, IconButton, Input, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styles from '../styles/Login.module.css' 
import Link from 'next/link' ;
import healthimage from "../assets/healthimage.png"
import healthplus from "../assets/healthplus.png";
import  { useRouter } from 'next/router';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Image from 'next/image';
import axios from 'axios';


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [wrongLogin,setWrongLogin] = useState(false);
  const router = useRouter();

  async function handleSubmit (e:any) {
    e.preventDefault();
    console.log("clicked");
    // post username and password to api
    const formData = {
      "user" : {
      email : email,
      password : password,
      }
    }
   // console.log(formData);
    
     await axios.post('https://floating-falls-55336.herokuapp.com/users/sign_in', formData)
    .then((response)=> {
      const res = response ;
     console.log( res.data,res.headers);
      
     } )
    .then((data) => {
     // console.log("Logged In Succesfully:",data);
     
      setEmail('');
      setPassword('');
      router.push('Admin/AdminUsers');
    })
    .catch((error) => {
      setWrongLogin(true);
      console.error("Error:",error); 
    })

  } 

  useEffect(()=> {

  },[password,email,wrongLogin])

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
     {wrongLogin? <div
        style={{ opacity: wrongLogin ? "1" : "0" }}
        className={styles.errorBox}
      >
        <div className={styles.errorLine}></div>
        <div className={styles.errorImage} onClick={()=> setWrongLogin(!wrongLogin)}></div>
        <div className={styles.errorText}>
          The password or username  is not correct. Try again or request a new password if
          you forgot.
        </div>
        <div className={styles.errorClose} onClick={()=> setWrongLogin(!wrongLogin)}></div>
      </div>
      : <div></div>
}
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
        <Input  className={styles.textfield}  type="email" value={email}  endAdornment={
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
              value={password} 
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
