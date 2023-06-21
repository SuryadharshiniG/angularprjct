import React, { useState } from 'react'
import api from '../../utils/api';

const initialState={
  email:"",
  password:""
}

const Login = () => {

  const[errorData, setErrorData]=useState({

  });
const [formData,setFormData] = useState(initialState);
const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});

};

const loginSubmit = async(e) => {
  e.preventDefault();
  console.log("Register message sent");
  console.log(JSON.stringify(formData));

   await api.post("/auth",formData)
   .then((res)=>console.log(res))
   .catch((err)=>{ 
    let errObj={};
    console.log(err.response.data.errors);
  err.response.data.errors.forEach((e) =>{
    console.log(e);
    errObj = {...errObj,[e.path]:e.msg};
  });
  console.log("error object"+ JSON.stringify(errObj));
  setErrorData({...errObj,});
  });

 };

  return (
  <section class="container">
    <div class="alert alert-danger">
      Invalid credentials
    </div>
    <h1 class="large text-primary">Sign In</h1>
    <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
    <form class="form" onSubmit={loginSubmit}>
      <div class="form-group">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={onChange}
        />
        <div class="d-block invalid-feedback">
          {errorData.email}
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
        <div class="d-block invalid-feedback">
          {errorData.password}
        </div>
      </div>
      <input type="submit" class="btn btn-primary" value="Login" />
    </form>
    <p class="my-1">
      Don't have an account? <a href="register.html">Sign Up</a>
    </p>
  </section>
  )
}

export default Login;