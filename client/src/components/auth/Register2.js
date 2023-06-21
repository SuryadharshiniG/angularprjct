import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {registerAction} from '../../redux/action/userAction';

const initialState={
    name:"",
    email:"",
    password:"",
    password2:""
  }


export const Register2 = ({isAuthenticated,registerAction}) => {
    const [formdata, setFormData] = useState(initialState);
    const [errorData,setErrorData]=useState({});
    const onChange=(e)=>{
        setFormData({...formdata,[e.target.name]:e.target.value});
    };

    const registerSubmit= (e) => {
        e.preventDefault()
        registerAction(formdata);
    };
  return (
    <>
    {" "}
        <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
        <form class="form" onSubmit={registerSubmit}>
          <div class="form-group">
            <input type="text" placeholder="Name" name="name" required value={formdata.name} onChange={onChange}/>
            <div class="d-block invalid-feedback">
              {errorData.name}
            </div>
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email Address" name="email" value={formdata.email} onChange={onChange}/>
            <div class="d-block invalid-feedback">
              {errorData.email}
            </div>
            <small class="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            >
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={formdata.password}
              onChange={onChange}
            />
            <div class="d-block invalid-feedback">
              {errorData.password}
            </div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={formdata.password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
     </>
  );
};

Register2.propTypes = {
 isAuthenticated: PropTypes.bool,
 registerAction: PropTypes.func,
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,    
});

const mapDispatchToProps = {
registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register2)