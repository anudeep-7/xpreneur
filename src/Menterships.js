import React, { Component } from 'react'
import './menterships.css'
export class Menterships extends Component {
    render() {
        return (
            <div>
                <div className="w-100 py-3 d-flex flex-row justify-content-start align-items-center mt-5" style={{backgroundColor:"#f9f9f9"}}>
                    <div className="mr-auto d-flex flex-row">
                   
                    <div class="dropdown  ml-4 ">
                    <button class="btn btn-white bg-white border dropdown-toggle p-2 px-3 " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Job Functions
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                    </div>
                   
                   
                   
                    <div class="dropdown  ml-4">
                    <button class="btn btn-white bg-white border dropdown-toggle p-2 px-3 " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Industries
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                    </div>
                    <div class="dropdown  ml-4">
                    <button class="btn btn-white bg-white border dropdown-toggle p-2 px-3 " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Opportunities
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                    </div>
                  
                    </div>
                    <div className="   text-center mr-5 text-secondary border " style={{border:"2px solid grey",borderRadius:"12px",width:"20vw",fontSize:"17px"}} >
                     <span className="fa fa-search pr-2 py-2"></span>
                     <span>Search</span>
                    </div>
                </div>




                <div className="row ">
                    
                    <div className=" col-8 d-flex flex-column align-items-center justify-content-center h-75">

                        {/* cards */}
                        <a className=" ml-4 py-2  my-1 w-75 d-flex flex-row"  href="/menterships/create">
                        <div  id="card" >
                        <img src="chanti.png" className=" img-fluid img-responsive  float-left" style={{width:"30%"}}></img>
                        <div className="p-3 text-left text-justify d-flex flex-column">
                            <h5 >
                                Create a Hiring Strategy for a Leading Product Firm to Scale their Team
                            </h5>
                            <span className="text-muted">
                                Build a Hiring Strategy for a Leading Product Firm to Scale their Team
                            </span>
                            <div className="text-muted mt-auto row px-3 mb-0 pb-0 pt-3">
                                Human Resource
                                <div className="ml-auto"><strong>46 students enrolled</strong></div>
                            </div>
                        </div>
                        </div>
                        </a>
                        <a className=" ml-4 py-2  my-1 w-75 d-flex flex-row"  href="/menterships/create">
                        <div  id="card" >
                        <img src="chanti.png" className=" img-fluid img-responsive  float-left" style={{width:"30%"}}></img>
                        <div className="p-3 text-left text-justify d-flex flex-column">
                            <h5 >
                                Create a Hiring Strategy for a Leading Product Firm to Scale their Team
                            </h5>
                            <span className="text-muted">
                                Build a Hiring Strategy for a Leading Product Firm to Scale their Team
                            </span>
                            <div className="text-muted mt-auto row px-3 mb-0 pb-0 pt-3">
                                Human Resource
                                <div className="ml-auto"><strong>46 students enrolled</strong></div>
                            </div>
                        </div>
                        </div>
                        </a>
                        <a className=" ml-4 py-2  my-1 w-75 d-flex flex-row"  href="/menterships/create">
                        <div  id="card" >
                        <img src="chanti.png" className=" img-fluid img-responsive  float-left" style={{width:"30%"}}></img>
                        <div className="p-3 text-left text-justify d-flex flex-column">
                            <h5 >
                                Create a Hiring Strategy for a Leading Product Firm to Scale their Team
                            </h5>
                            <span className="text-muted">
                                Build a Hiring Strategy for a Leading Product Firm to Scale their Team
                            </span>
                            <div className="text-muted mt-auto row px-3 mb-0 pb-0 pt-3">
                                Human Resource
                                <div className="ml-auto"><strong>46 students enrolled</strong></div>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-4 ">
                        <div 
                        className=" border p-3 d-flex flex-column align-items-center justify-content-center text-center  w-75 ml-4 mt-5" style={{height:"50%"}}>
                        <span className="text-muted" >Get any menternship for</span>
                        <span  className="my-2"><strong><span className="fas fa-rupee-sign"></span>1500</strong></span>
                        <span className="my-2">or</span>
                        <span  className="my-2 text-muted">
                        Get all menternships with the Platinum Subscription
                        </span>
                        <span><strong>
                        <span className="fas fa-rupee-sign"></span>
                        4999/year
                            </strong></span>
                        </div>
                       
                    </div>

                </div>
           
                   
           
            </div>
        )
    }
}

export default Menterships
