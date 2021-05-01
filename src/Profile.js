import React, { Component } from 'react'
import "./profile.css"
import Dropzone from 'react-dropzone'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

export default class Profile extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             like:1,
             setPassword:false
        }
    }
    render() {
       
        
        return (
           <div className="d-flex flex-column justify-content-start align-items-center" id="profileContainer" style={{marginTop:"70px"}} >
            <div className="d-flex flex-column justify-content-center align-items-start " id="profileContainerBox">
                <span className="font-weight-bold py-3 px-2" style={{fontSize:"14px"}}>PROFILE</span>
            <div className="row bg-white border d-flex flex-row ml-1 profileInputBox " style={{padding:"40px"}}>



            <div className="d-flex flex-column  align-items-start mx-1 my-3">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>User Name</span>    
            <input className=" rounded py-2  px-2 inputProfile"    value="Anudeep" ></input>
           
            </div>
            
            <div className="d-flex flex-column  align-items-start mx-1 my-3">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Full Name</span>    
            <input className=" rounded py-2  px-2 inputProfile"  ></input>
           
            </div>


            <div className="d-flex flex-column  align-items-start mx-1 my-3">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Date of Birth</span>    
            <input className=" rounded py-2  px-2 inputProfile" type="date"  ></input>
           
            </div>


            <div className="d-flex flex-column  align-items-start mx-1 my-3">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Nationality</span>    
            <input className=" rounded py-2  px-2 inputProfile" placeholder="India " ></input>
           
            </div>
            
            <div className="d-flex flex-column  align-items-start mx-1 my-3">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Your Bio</span>    
            <textarea className=" rounded py-2  px-2 border" rows="4" cols="30" placeholder=" " ></textarea>
           
            </div>



            <div className="d-flex flex-column align-items-start mx-1 my-3 " style={{width:"100%"}}>
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Image</span>   
            <div id="imageUpload" className="d-flex flex-row justify-content-center align-items-center">
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p><span className="uploadFile">Upload a file</span> or drag and drop here</p>
                    </div>
                    </section>
                )}
                </Dropzone></div> 
            <span className="py-1 text-muted" style={{fontSize:"14px"}}>Maximum file size 3MB - acceptable file types .jpg, .jpeg, .gif, .png.</span>
            
            </div>
                
            {/* <hr style={{color:"black",width:"100%"}}></hr> */}

           <div className="btn saveChanges">
                Save Changes
           </div>
            </div>
           
            </div>

            <div className="d-flex flex-column justify-content-center align-items-start " id="credentialsContainerBox">
                <span className="font-weight-bold py-3 px-2" style={{fontSize:"14px"}}>CREDENTIALS</span>
            <div className=" bg-white border d-flex flex-column ml-1 credentialsBox " style={{padding:"40px"}}>


            <div className="credentialsrow">
            <div className="d-flex flex-column  align-items-start my-2">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Email</span>    
            <input disabled className=" rounded py-2  px-2 inputProfile mr-2"    value="kanudeep2@gmail.com" ></input>
            <span className=" py-1 text-justify text-muted" style={{fontSize:"13px"}}>You can't change your email because you have connected your Google account</span>
            </div>
           
            <div className="d-flex flex-column justify-content-start   w-50 p-1  align-items-start my-2 ml-2">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Connected Apps</span>   
            <div className="d-flex flex-row  align-items-center my-1 " style={{fontSize:"14px"}}>
                <span className="fab fa-google px-2"></span>
                <span className="text-muted" >Google</span>
                <span className="ml-auto px-1 font-weight-bold " id="disconnect">Disconnect</span>
            </div> 
            <div className="d-flex flex-row  align-items-center my-1" style={{fontSize:"14px"}}>
                <span className="fab fa-linkedin px-2 "></span>
                <span className="text-muted" >LinkedIn</span>
                <span className="ml-auto px-1 font-weight-bold " id="disconnect">Connect your Account</span>
            </div> 
            {/* <div className="d-flex flex-row w-100 align-items-center my-1" style={{fontSize:"14px"}}>
                <span className="fab fa-uber px-2"></span>
                <span className="text-muted" >Zoom</span>
                <span className="ml-auto px-1 font-weight-bold " id="disconnect">Connect your Account</span>
            </div> 
           */}
           
           
            </div>
            </div>
            <div className="align-self-start my-3" onClick={()=>this.setState({setPassword:!this.state.setPassword})}>
                <span className="font-weight-bold" style={{fontSize:"14px"}} id="showYourPassword">Set your Password {this.state.setPassword==false?<span style={{fontSize:"13px"}} className="fas fa-chevron-down px-1"></span>:<span style={{fontSize:"13px"}} className="fas fa-chevron-up px-1"></span>}</span>
            </div>
            {this.state.setPassword==true?
            <>
            <div className="d-flex flex-column  align-items-start  my-2">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>New Password</span>    
            <input  className=" rounded py-2  px-2 inputProfile mr-2"    value="" ></input>
          
            </div>

            <div className="d-flex flex-column  align-items-start  my-2">
            <span className="font-weight-bold py-2" style={{fontSize:"14px"}}>Password Confirmation</span>    
            <input  className=" rounded py-2  px-2 inputProfile mr-2"    value="" ></input>
          
            </div>
           </> :<div></div>}
            {/* <hr style={{color:"black",width:"100%"}}></hr> */}

           <div className="my-2 btn saveChanges" style={{width:"135px"}}>
                Save Changes
           </div>
            </div>
           
            </div>






















            {/* <div className="text-center">
            <input className="border bg-light" style={{position:"relative",width:"300px",height:"300px",borderRadius:"50%"}}>
            </input>
            <span className="fas fa-upload text-secondary" style={{fontSize:"80px",position:"relative",left:"-50%"}}></span>
            </div>
          
           
            <div style={{width:"500px"}} className="p-3 d-flex flex-column">

            <input className="bg-light  p-2 my-3 w-75 border"   placeholder="UserName" style={{border:"none",height:"50px",fontSize:"18px"}}></input>
            <input className="bg-light  p-2 my-3 w-75 border"   placeholder="Full Name" style={{border:"none",height:"50px",fontSize:"18px"}}></input>
            <input className="bg-light  p-2 my-3 w-75 border"   placeholder="Date" type="date" style={{border:"none",height:"50px",fontSize:"18px"}}></input>
            <input className="bg-light  p-2 my-3 w-75 border"   placeholder="Email" style={{border:"none",height:"50px",fontSize:"18px"}}></input>
            <input className="bg-light  p-2 my-3 w-75 border"   placeholder="Nationality" style={{border:"none",height:"50px",fontSize:"18px"}}></input>
            <div className="btn btn-dark w-25 ml-auto py-2">SAVE</div>


            </div>
          */}
           </div>
     )
    }
}
