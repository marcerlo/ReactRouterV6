import React, { useNavigate } from 'react-router-dom'



const LoginScreem = () => {

 const navigate = useNavigate();


const hadnleLogin = () =>{

 navigate("/marvel",{replace:true}); 

}

  return (
    <div className=' container mt-5 '>
   
   
    <h1>Login</h1>
    <hr></hr>
    
    <bottom  className="btn-dark btn " onClick={hadnleLogin}>
    login
    </bottom>
    
    </div>
  )
}

export default LoginScreem