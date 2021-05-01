import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
           
                  <div class="d-flex flex-column align-items-center justify-content-center text-align-center " style={{minHeight:"100vh"}}>
                      <div className="w-50 d-flex flex-column align-items-center justify-content-center text-align-center border py-5">
                      <h3 className="my-2 mb-4 text-muted font-weight-bold">Sign In</h3>
                    <input type="text" className="rounded w-50 my-2 py-2 border border-dark" placeholder="UserName/Email"></input>
                     <input type="text" className="rounded w-50  my-2 py-2 border border-dark" placeholder="Password"></input>
          
                     <button className="btn btn-dark w-50 my-3">Login</button>
                     <a href="/signup">
                     <span className="text-muted"><u>Create New Account</u></span>
                     </a>
                    
                      </div>
         
         </div>
      
        
        )
    }
}

export default Login
