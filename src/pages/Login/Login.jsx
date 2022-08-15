import './Login.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { borderRadius, padding } from '@mui/system';

export default function Login() {
    const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className='login'><div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">FreeSocial</h3>
            <span className="logindesc">FreeSocial helps you connect and
             share with the people in your life.</span>
        </div>
        <div className="loginright">
      <div className="loginbox">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },display:'flex',flexDirection:"column",margin:'10px'
       ,alignItems:'center',backgroundColor:"white",height:"34vh",width:"38vw" ,padding:'12px'
    , borderRadius:"1.5%" }} className="boxlogin"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Email address or phone number "
        value={name}
        onChange={handleChange}className='textfieldlogin'
      
      />
      <TextField
        id="outlined-uncontrolled"
        label="Password"
        defaultValue="" className='textfieldlogin'
      />
            <Button variant="contained" className="buttonlogin">Log in</Button>
            <Link href="#" underline="hover" className="underlinehover">
        {'Forgotten password ?'}
      </Link>
      <hr className="hrline"></hr>
      <Button variant="contained" className="buttoncreateaccount">Create New Account</Button>

    </Box>
      </div>
        </div>
        </div></div>
  )
}
