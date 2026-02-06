import React, { useState } from 'react'
import "../style.css";
import bgImage from "../images/backgroundimage.jpg";
import { use } from 'react';

const Form = () => {
  const [userData, setUserData] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
  
  const [borderColor, setBorderColor] = useState({
    userColor:"",
    emailColor:"",
    passwordColor:"",
    confirmPasswordColor:"",
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({...userData,[e.target.name] : e.target.value});

  }

  const validate = (e) => {
    e.preventDefault();

    let newErrors = {};
    let borderColors = {};
    if(!userData.username){
      newErrors.username = "Username is required";
      borderColors.userColor = "red";
    }
    else if(userData.username.length < 5){
      newErrors.username = "Username is too short";
      borderColors.userColor = "red";
    }
    else if(userData.username.length > 20){
      newErrors.username = "Username is too long";
      borderColors.userColor = "red";
    }
    else{
      borderColors.userColor = "lightgreen";
    }


    if(!userData.email){
      newErrors.email = "Email is required";
      borderColors.emailColor = "red";
    }
    else if(!userData.email.includes("@")){
      newErrors.email = "Invalid email format";
      borderColors.emailColor = "red";
    }
    else{
      borderColors.emailColor = "lightgreen";
    }

    if(!userData.password){
      newErrors.password = 'Password is required';
      borderColors.passwordColor = "red";
    }
    else if(userData.password.length > 20){
      newErrors.password = 'Password is too long';
      borderColors.passwordColor = "red";
    }
    else if(userData.password.length < 8){
      newErrors.password = "Password is too short";
      borderColors.passwordColor = "red";
    }
    else{
      borderColors.passwordColor = "lightgreen";
    }

    if(!userData.confirmPassword){
      newErrors.confirmPassword = "Confirm Password is required";
      borderColors.confirmPasswordColor = "red";
    }
    else if(userData.password !== userData.confirmPassword){
      newErrors.confirmPassword = "Password does not match";
      borderColors.confirmPasswordColor = "red";
    }
    else{
      borderColors.confirmPasswordColor = "lightgreen";
    }

    setErrors(newErrors);
    setBorderColor(borderColors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully 🎉");
      setUserData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setBorderColor({
        userColor:"",
        emailColor:"",
        passwordColor:"",
        confirmPasswordColor:"",
      });
    }
  };

  return (
    <div className='container'>
        <div className="left-section">
          <img src={bgImage} alt="background-image" />
        </div>

        <form className="right-section" onSubmit={validate}>
          <input type="text"
          name='username'
          placeholder='Username'
          value={userData.username}
          onChange={handleChange}
          style={{borderColor:borderColor.userColor}}
          />
          {errors.username && <p className='error'>{errors.username}</p>}

          <input type="text"
          name='email'
          placeholder='Email'
          value={userData.email}
          onChange={handleChange} 
          style={{borderColor:borderColor.emailColor}}
          />
          {errors.email && <p className='error'>{errors.email}</p>}

          <input type="password"
          name='password'
          placeholder='Password'
          value={userData.password}
          onChange={handleChange}
          style={{borderColor:borderColor.passwordColor}} 
          />
          {errors.password && <p className='error'>{errors.password}</p>}


          <input type="password"
          name='confirmPassword'
          placeholder='ConfirmPassword'
          value={userData.confirmPassword}
          onChange={handleChange} 
          style={{borderColor:borderColor.confirmPasswordColor}}
          />
          {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

          <button type='submit' className='submit-btn'>Submit</button>
        </form>
    </div>
  );
}

export default Form;