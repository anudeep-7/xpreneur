import React, { Component } from 'react'
import style from "./home.module.css";
import Modal from 'react-modal';
import "./home.css"
Modal.setAppElement('#root');
export class Home extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             userNamePopup:false,
             login:false,
             createAccount:false,
        }
    }
    
    
    
    render() {
      
       
        return (
            <div className="  py-3 align-items-center justify-content-center" id="homeBox" style={{padding:"40px"}}>
                <a href="/article">
                <div className="align-items-start text-justify mx-3"  id="mainArticleHome" >
                <img src="mainArticle.png" ></img>
                <h3 className="pt-4 pb-2 font-weight-bold" id="articleGenre">Genre : Art</h3>
                <h1 className="" style={{fontWeight:"600"}}>Diversity in leadership: Why it matters and what you can do</h1>
               
                </div>
             
                </a>
               
                <div className="d-flex flex-column ">
                    <div style={{width:"450px",fontSize:"19px",fontWeight:"400"}} id="article" className="d-flex flex-row text-left py-3 justify-content-center align-items-center">
                         <img src="article1.png " className="float-left px-2" style={{height:"100px",borderRadius:"15px"}}></img>
                    <div>
                    <span className=" font-weight-bold d-flex flex-column" id="articleGenre">Genre : Art</span>
                    7 careers page best practices to boost your employer brand 
                    </div>
                   
                    </div>
                    <div style={{fontSize:"19px",fontWeight:"400"}} id="article" className="d-flex flex-row text-left py-3 justify-content-center align-items-center">
                         <img src="article2.png " className="float-left px-2" style={{height:"100px",borderRadius:"15px"}}></img>
                    <div>
                    <span className=" font-weight-bold d-flex flex-column" id="articleGenre">Genre : Technology</span>
                    7 careers page best practices to boost your employer brand 
                    </div>
                   
                    </div>
                    <div style={{width:"450px",fontSize:"19px",fontWeight:"400"}} id="article" className="d-flex flex-row text-left py-3 justify-content-center align-items-center">
                         <img src="article3.png " className="float-left px-2" style={{height:"100px",borderRadius:"15px"}}></img>
                    <div>
                    <span className=" font-weight-bold d-flex flex-column" id="articleGenre">Genre : Science</span>
                    7 careers page best practices to boost your employer brand 
                    </div>
                   
                    </div>
                    <div style={{width:"450px",fontSize:"19px",fontWeight:"400"}} id="article" className="d-flex flex-row text-left py-3 justify-content-center align-items-center">
                         <img src="article4.png " className="float-left px-2" style={{height:"100px",borderRadius:"15px"}}></img>
                    <div>
                    <span className=" font-weight-bold d-flex flex-column" id="articleGenre">Genre : World</span>
                    7 careers page best practices to boost your employer brand 
                    </div>
                   
                    </div>
                  
                </div>
                <Modal isOpen={this.state.userNamePopup} 
                                 onRequestClose={()=>this.setState({userNamePopup:false})}
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
                                    <span style={{fontSize:"55px",lineHeight:"30px"}} onClick={()=>this.setState({userNamePopup:false})} id="wrong" className="ml-auto py-2">&times;</span>
                                    <span className="py-2 my-1" style={{fontSize:"18px"}}> Enter a unique user name</span>
                                    <input className="bg-light border p-2 my-1 w-75"      placeholder="Your Name" style={{border:"none",height:"50px",fontSize:"18px"}}></input>
                                   <a href="#" className="my-2 "><span className="py-2" style={{fontSize:"18px"}}> I already have an account</span></a> 
                                   <div className="btn btn-dark  py-2 mt-5 ml-auto" style={{width:"150px"}} onClick={()=>this.setState({userNamePopup:false})}>Read Article</div>
                               </div>
                               
                            </Modal>
              
                <Modal isOpen={this.state.createAccount} 
                        onRequestClose={()=>this.setState({createAccount:false})}
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
                    height:"400px",
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
                        <span style={{fontSize:"55px",lineHeight:"30px"}} onClick={()=>this.setState({createAccount:false})} id="wrong" className="ml-auto py-2">&times;</span>
                        <span className="py-2 my-1" style={{fontSize:"18px"}}>Create an Account</span>
                        <input className="bg-light  p-1 my-1 w-75"      placeholder="Your Name" style={{border:"none",height:"40px",fontSize:"18px"}}></input>
                        <input className="bg-light  p-1 my-2 w-75"      placeholder="Full Name" style={{border:"none",height:"40px",fontSize:"18px"}}></input>
                        <input className="bg-light  p-1 my-1 w-75"      placeholder="Your Password" style={{border:"none",height:"40px",fontSize:"18px"}}></input>
                        <input className="bg-light  p-1 my-2 w-75"      placeholder="Your Mail" style={{border:"none",height:"40px",fontSize:"18px"}}></input>
                        <div className="btn btn-dark  py-2 mt-2 ml-auto" onClick={()=>this.setState({createAccount:false})} style={{width:"150px"}}>Read Article</div>
                    </div>
                    
                </Modal>

            </div>
         
        )
    }
}

export default Home
