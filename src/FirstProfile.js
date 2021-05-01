import React, { Component } from 'react'
import "./firstprofile.css"
export class FirstProfile extends Component {
    render() {
        return (
            <div id="firstProfileContainer">
                <div className="d-flex flex-column justify-content-center align-items-center " id="cover" style={{backgroundColor:"#080c22",width:"100%",marginTop:"70px",padding:"50px",paddingBottom:"10px"}}>
                    <img src="chanti.png" className=" rounded-circle" id="profilePic"></img>
                    <h3 className="text-white mt-3">Anudeep Chandra</h3>
                    <div className="mb-3">
                        <a href="/editprofile">
                        <div className="btn connect mx-1"  >Edit my Profile</div>
                        </a>
                        {/* <div className="btn connect mx-1" >Message</div> */}
                    </div>
                    <h5 className="text-white">CBIT College</h5>
                    <div className="w-100 d-flex  text-white align-items-center "  >
                        <div className="ml-auto d-flex align-items-center ">
                        <span className="px-2 coverDown" >4 Posts</span>
                        <span style={{fontSize:"30px"}}>|</span>
                        
                        <span  className="px-2  coverDown">5 Followers</span>
                        <span style={{fontSize:"30px"}}>|</span>
                        
                        <span className="px-2  coverDown">10 Following</span>
                        {/* <span className="px-2" style={{fontSize:"30px"}}>|</span> */}
                        
                        </div>
                       
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{marginTop:"70px"}}>
                   <div className="bg-white d-flex flex-column justify-content-start align-items-start p-3 text-left my-2 profileInfo" style={{minHeight:"100px"}}>
                    <span className="font-weight-bold py-2">About</span>
                    <span>Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.</span>
                   </div>
                   <div className="bg-white d-flex flex-column justify-content-start align-items-start p-3 text-left my-4 profileInfo" style={{minHeight:"100px"}}>
                    <span className="font-weight-bold py-2">Personal Details</span>
                    <span className="py-1">
                    <span className="font-weight-bold py-2 pr-2">User Name</span>
                    <span className="text-Firstary ml-auto">Anudeep</span>
                    </span>
                    <span className="py-1">
                    <span className="font-weight-bold py-2 pr-2">Mail</span>
                    <span className="text-Firstary ml-auto">kanudeep2@gmail.com</span>
                    </span>
                    <span className="py-1">
                    <span className="font-weight-bold py-2 pr-2">College</span>
                    <span className="text-Firstary ml-auto">CBIT</span>
                    </span>
                    <span className="py-1">
                    <span className="font-weight-bold py-2 pr-2">Date of Birth</span>
                    <span className="text-Firstary ml-auto">26-02-2000</span>
                    </span>
                    <span className="py-1">
                    <span className="font-weight-bold py-2 pr-2">Gender</span>
                    <span className="text-Firstary ml-auto">Male</span>
                    </span>
                    <span className="py-1">
                    <span className="font-weight-bold py-2 pr-2">Nationality</span>
                    <span className="text-Firstary ml-auto">India</span>
                    </span>
                   </div>
             
                </div>
           
            </div>
        )
    }
}

export default FirstProfile
