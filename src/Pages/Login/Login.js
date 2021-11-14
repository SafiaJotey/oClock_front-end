import React from 'react';
import { useLocation,useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import "./Login.css"
import login from '../../Images/login.png'
const Login = () => {
    const { signInUsingGoogle, isLogin, error,  handleNameChange,
      handleEmailChange,
      handlePasswordChange,
      toggleLogin,
      handleRegistration,
      
     
      isLoading} = useAuth();
         const history=useHistory();
       const location=useLocation();
       const redirect_url=location.state?.from || "/home";

       const handleSignInUsingGoogle=()=>{
           signInUsingGoogle()
           .then(result => {
            
            console.log(result.user);
               history.push(redirect_url);
              
            

        })
       };

    


    return (

        <div className="login ">
               <h3>Please 
               {isLogin ? 'Login' : 'Register'}
               </h3>

               <form   onSubmit={handleRegistration }>

                        <div className="col-md-12 d-flex justify-content-center ">   
            
                          <div className="cart">
                            <div className="cart-details">
                              <img src={login} alt="" />
                            </div>
                            {!isLogin && <div className="row mb-3">
                                          
                                          <div className="col-sm-10">
                                              <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your Name" />
                                          </div>
                                      </div>}
                                      <div className="row mb-3">
                                          
                                          <div className="col-sm-10">
                                              <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                        
                                          <div className="col-sm-10">
                                              <input onBlur={handlePasswordChange} type="password"placeholder="Your PassWord" className="form-control" id="inputPassword3" required />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          <div className="col-sm-10 offset-sm-2">
                                              <div className="form-check">
                                                  <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                                  <label className="form-check-label" htmlFor="gridCheck1">
                                                      Already Registerd?
                                                  </label>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="row mb-3 text-danger">{error}</div>
                                      <button type="submit" className="btn btn-primary">
                                          {isLogin ? 'Login' : 'Register'}
                                      </button>
                                      
                            <div className="text-area">
                            <button className="btn btn-warning mx-1" onClick={handleSignInUsingGoogle}> Google Sign In</button>
                            </div>
                          </div>
                   </div>
               </form>
                
        </div>
        
       
    );

    
};

export default Login;
