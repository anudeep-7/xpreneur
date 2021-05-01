import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import style from "./header.module.css";
import Popup from './Popup';
import './Header.css';
import Modal from 'react-modal';


export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             creatorsClub:false,
             genre:false,
             neverSettle:false,
             login:false
        }
    }
    

    
    render() {
     
        
        return (
           <div className="headerContainer">
               <div className="logo">
                   <img src="x.png" className="xImage"></img>
                   <img src="preneur.png" className="preneurImage"></img>
               </div>
               <nav className="">
              
                   <ul>
                    <li style={{padding:"0px 30px 0px 30px"}} onClick={()=>this.setState({creatorsClub:!this.state.creatorsClub,genre:false,neverSettle:false})}> 
                    creators club <span className="fas fa-caret-down"></span>
                    </li>
                    <li style={{padding:"0px 30px 0px 30px"}} onClick={()=>this.setState({genre:!this.state.genre,creatorsClub:false,neverSettle:false})}> 
                    genre <span className="fas fa-caret-down"></span>
                    </li>
                    <li style={{padding:"0px 30px 0px 30px"}}
                    // onClick={()=>this.setState({neverSettle:!this.state.neverSettle,creatorsClub:false,genre:false})}
                    >
                    never settle
                    </li>
                  
                   </ul>
                  
               </nav>
               <div className="d-flex mx-2 ml-auto">
                <a href="/profile" id="profileButton"><div className="" >
                   <span className="far fa-user"></span>
               </div></a>
               
                <div className="loginButton" onClick={()=>this.setState({login:true})}>
                    <span>Login</span>
                </div>
               </div>
             
                <Modal isOpen={this.state.creatorsClub} 
                id="dropdownModal"
                                 onRequestClose={()=>this.setState({creatorsClub:false})}
                             style={{
                                overlay: {
                                  position: 'fixed',
                                  top: "70px",
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                },
                                content: {
                                width:"100%",
                                height:"420px",
                                  position: 'absolute',
                                  top: '0px',
                                  left:"0px",
                                  border: '0px solid #ccc',
                                  background: '#d6f7ee',
                                  overflow: 'auto',
                                  WebkitOverflowScrolling: 'touch',
                                  borderRadius: '4px',
                                  outline: 'none',
                                 
                                 
                                }
                              }}
                           
                           >
                                <div className="row d-flex flex-column justify-content-start p-3 align-items-start h-100">
                                    <h5 className="font-weight-bold">HR toolkit Review <span className="fa fa-chevron-right"></span></h5>
                                    <h5>Ready-to-go resources to support you through every stage of the HR lifecycle, from recruiting to retention.</h5>

                                    <hr/>
                                    <div className=" d-flex flex-row justify-content-start align-items-start w-100">
                                        <div className=" m-2 mx-3 p-3 d-flex flex-column" style={{maxWidth:"25%"}}>
                                            <div className="btn  bg-white my-2" style={{borderRadius:"50%",color:"teal",width:"auto",maxWidth:"50px"}}>
                                                <span className="fas fa-columns" ></span>
                                            </div>
                                            <h5 className="font-weight-bold">HR templates <span className="fa fa-chevron-right"></span></h5>
                                            <span>Banish the blank page for good with our 1000+ HR templates. Add a few personal touches and you’re good to go.</span>
                                        </div>
                                        <div className=" m-2 mx-3 p-3 d-flex flex-column" style={{maxWidth:"25%"}}>
                                            <div className="btn  bg-white my-2" style={{borderRadius:"50%",color:"teal",width:"auto",maxWidth:"50px"}}>
                                                <span className="fas fa-book" ></span>
                                            </div>
                                            <h5 className="font-weight-bold">Tutorials <span className="fa fa-chevron-right"></span></h5>
                                            <span>Banish the blank page for good with our 1000+ HR templates. Add a few personal touches and you’re good to go.</span>
                                        </div>
                                        <div className=" m-2 mx-3 p-3 d-flex flex-column" style={{maxWidth:"25%"}}>
                                            <div className="btn  bg-white my-2" style={{borderRadius:"50%",color:"teal",width:"auto",maxWidth:"50px"}}>
                                                <span className="fas fa-star" ></span>
                                            </div>
                                            <h5 className="font-weight-bold">HR Terms <span className="fa fa-chevron-right"></span></h5>
                                            <span>Banish the blank page for good with our 1000+ HR templates. Add a few personal touches and you’re good to go.</span>
                                        </div>
                                   
                                    </div>
                              
                                  <input id="search" className="mx-4 px-4 py-2 border" style={{border:"none",borderRadius:"10px",width:"30%"}} placeholder=" Search"></input>
                                </div>
                               
                            </Modal>
                <Modal isOpen={this.state.neverSettle} 
                        onRequestClose={()=>this.setState({neverSettle:false})}
                    style={{
                    overlay: {
                        position: 'fixed',
                        top: "75px",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                    width:"100%",
                    height:"230px",
                        position: 'absolute',
                        top: '0px',
                        left:"0px",
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        
                    }
                    }}
                
                >
                    <div className="w-100 d-flex flex-column">
                        
                    </div>
                    
                </Modal>
                <Modal isOpen={this.state.genre} 
                  id="dropdownModal"
                        onRequestClose={()=>this.setState({genre:false})}
                    style={{
                    overlay: {
                        position: 'fixed',
                        top: "70px",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                    width:"100%",
                    height:"420px",
                        position: 'absolute',
                        top: '0px',
                        left:"0px",
                        border: '1px solid #ccc',
                        background: '#d6f7ee',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        
                    }
                    }}
                
                >
                    <div className="row d-flex flex-row justify-content-start " >
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Art</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Self Help</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Science</span>
                        </div>
                      
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} > World</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Health</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Technology</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Sports</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Pyschology</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Education</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Art</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Self Help</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Science</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} > World</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Health</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Technology</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Sports</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Pyschology</span>
                        </div>
                        <div className="col-3 d-flex justify-content-center" id="dropdownButtons">
                        <span className="btn  px-5 py-4" style={{fontSize:"28px",fontWeight:"600"}} >Education</span>
                        </div>
                       
                    </div>
                    
                </Modal>
                <Modal isOpen={this.state.login} 
                        onRequestClose={()=>this.setState({login:false})}
                    style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter:"blur(3px)",
                        backgroundColor: 'rgba(255,255,255,0.2)'
                    },
                    content: {
                        width:"400px",
                    height:"350px",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: "translate(-50%,-50%)",
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '10px'
                    }
                    }}
                
                >
                    <div className="d-flex flex-column mx-2 align-items-start justify-content-center">
                        <span style={{fontSize:"55px",lineHeight:"30px"}} onClick={()=>this.setState({login:false})} id="wrong" className="ml-auto py-2">&times;</span>
                        <span className="py-2 my-1" style={{fontSize:"18px"}}> Login</span>
                        <input className="bg-light border p-1 my-1 w-75"      placeholder="Your Name" style={{border:"none",height:"40px",fontSize:"18px"}}></input>
                        <input className="bg-light border p-1 my-2 w-75"      placeholder="Your Password" style={{border:"none",height:"40px",fontSize:"18px"}}></input>
                        <div className="btn btn-dark  py-2 mt-5 ml-auto" onClick={()=>this.setState({login:false})} style={{width:"150px"}}>Read Article</div>
                    </div>
                    
                </Modal>
               
           </div>
           
      
      )
    }
}

export default Header
