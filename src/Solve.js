import React, { Component } from 'react'

export class Solve extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:1
        }
    }
    
    render() {
        return (
            <div class="row mt-5 ">
            <div class="btn-group btn-block py-2" style={{position:"fixed",left:"0px"}} >
            <button className={this.state.value==1?"col-4 btn bg-light border py-2":"col-4 btn bg-white border  py-2" } onClick={()=>this.setState({value:1})}>Solve</button>
            <button className={this.state.value==2?"col-4 btn bg-light border py-2":"col-4 btn bg-white border py-2" } onClick={()=>this.setState({value:2})}>Tools & Resources</button>
            <button className={this.state.value==3?"col-4 btn bg-light border py-2":"col-4 btn bg-white border py-2" }  onClick={()=>this.setState({value:3})}>Help</button>
        </div> 
          {this.state.value==1 ?
           <div class=" mt-5 w-50 mx-auto py-3  d-flex flex-column align-items-center justify-content-center text-left ">
           <h4 className="my-2 text-muted font-weight-normal ">You are solving for Uber Company</h4>
           <input type="text" className="w-75 my-2 py-2 border border-dark" placeholder="Title"></input>
           <h4 className="my-2 text-muted font-weight-normal">Describe the Solution</h4>
           <textarea type="text" className="w-75 my-2 py-2 border border-dark" style={{height:"180px"}}></textarea>
           <h4 className="my-2 text-muted font-weight-normal">Upload Solution Proof</h4>
           <input type="file" className="w-75 my-2 py-2 " ></input>
           <button className="btn btn-dark w-75">SUBMIT  </button>
         </div>
      
      :
        this.state.value==2?
        <div className="container p-3 mt-5">
        <div className="row my-5 ">
          
            <div className="col-5 pr-5 pb-5 d-flex flex-column  ">
               
                <h2 className="text-justify font-weight-bold pt-2 ">
                Video description of problem statement
                </h2>
                <div className="text-muted text-justify">
                Explained By Pavan Kalyan.
                </div>
                <img src="/chanti.png" className="img-fluid img-responsive p-2 "></img>
              
             
          
            </div>
            <div className="col-2"></div>
            <div className="col-4 d-flex flex-column ">
                <h3 className="font-weight-normal text-muted ml-1">Relevant articles and papers</h3>
                <ol >
                    <li className="text-left">www.sciencetoday.com/prblems</li>
                    <li className="text-left">www.kickstartx.com/prblem23233</li>
                    <li className="text-left">www.ndl.iitkgp.ac.in/kk/34/article988</li>
                </ol>
                <h3 className="font-weight-normal text-muted mt-5 text-left ml-3">Other articles</h3>
                <ol >
                    <li className="text-left">www.sciencetoday.com/prblems</li>
                    <li className="text-left">www.kickstartx.com/prblem23233</li>
                    <li className="text-left">www.ndl.iitkgp.ac.in/kk/34/article988</li>
                </ol>
                
            </div>
           
        </div>
        {/* <div className="row my-5 ml-4">
          
          <div className="col-8 pr-5 pb-5 d-flex flex-column  ">
            
             
              <h2 className="text-justify font-weight-bold py-3 ">
              Abstract
              </h2>
              <div className="text-muted text-justify">
              In the prevailing cut-throat competition among corporate firms, employee competency plays an instrumental role if victory is to be rejoiced. Competencies can be understood as the underlying traits and characteristics of an individual – an amalgamation of his or her skills, knowledge and attitudes – essential in the workforce. Businesses of all shapes and sizes can benefit from having a well thought-out recruitment strategy in place.
              <br></br>

            In this Menternship, Uber is looking for a good understanding of the HR Market, the competencies needed by a candidate to qualify for their tech team & excellent analytic skills to come up with that killer hiring strategy they're looking for.
              </div>
              
          </div>
        
      </div> */}
      {/* <div className="row my-5 ml-4">
          
          <div className="col-8 pr-5 pb-5 d-flex flex-column  ">
            
             
              <h2 className="text-justify font-weight-bold py-3 ">
              Why take up this menternship?
              </h2>
              <div className="text-muted text-justify pl-4">
              On completing this menternship, you will learn about
              <br></br>
                1. Market Mapping
                <br></br>
                2. Market Research
                <br></br>
                3. Data Analysis
                </div>
              
          </div>
        
      </div>
      */}
      <div className="row my-2">
          
          <div className="col-8 pr-5 pb-5 d-flex flex-column  ">
            
             
              <h2 className="text-justify font-weight-bold py-3 ">
              Expected Output
              </h2>
              <div className="text-muted text-justify font-weight-bold">
         <ol className="ml-0 pl-4">
             <li className="py-2 text-dark">Ideal candidate profile and selected platforms</li>
             <li className="py-2 text-dark">A research report outlining your analysis of candidate data collected</li>
             <li className="py-2 text-dark">Spreadsheet recording the market mapping</li>
             <li className="py-2 text-dark">Video pitch of your strategy</li>
             <li className="py-2 text-dark">Presentation of your hiring Strategy</li>

           
         </ol>
         
                </div>
              
          </div>
        
      </div>
   
    </div>

       :
      <div class=" mt-5 container mx-auto py-3  d-flex flex-column align-items-center justify-content-center ">
            <div className="row w-100 justify-content-center mt-3">
            <input className="border border-dark py-2 w-50" type="text"></input>
            <button className="btn btn-dark w-25 active" style={{borderRadius:"0px"}}>SEARCH</button>

            </div>
            <div class="row mt-5 ">
                <h4 className="my-2 text-muted font-weight-normal ">Recommended for You</h4>
                <div className="d-flex flex-row w-100 justify-content-start align-items-center">
                    <div className=" mx-2 border border-dark p-4 d-flex flex-column justify-content-center align-items-center bg-light col-4" >
                        <span className="fas fa-user" style={{fontSize:"50px"}}></span>
                        <h4 className="my-2 text-muted font-weight-normal mt-3 my-1  ">Anudeep Kakkireni</h4>
                        <span className="font-weight-bold my-1">Mentor</span>
                        <span className="my-2 w-75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
                        </span>
                        <span className="far fa-comment my-2 mt-3" style={{fontSize:"40px"}}></span>
                        <span>Ask Help</span>
                    </div>
                    <div className=" mx-2 border border-dark p-4 d-flex flex-column justify-content-center align-items-center bg-light col-4" >
                        <span className="fas fa-user" style={{fontSize:"50px"}}></span>
                        <h4 className="my-2 text-muted font-weight-normal mt-3 my-1  ">Anudeep Kakkireni</h4>
                        <span className="font-weight-bold my-1">Mentor</span>
                        <span className="my-2 w-75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
                        </span>
                        <span className="far fa-comment my-2 mt-3" style={{fontSize:"40px"}}></span>
                        <span>Ask Help</span>
                    </div>
                    <div className=" mx-2 border border-dark p-4 d-flex flex-column justify-content-center align-items-center bg-light col-4" >
                        <span className="fas fa-user" style={{fontSize:"50px"}}></span>
                        <h4 className="my-2 text-muted font-weight-normal mt-3 my-1  ">Anudeep Kakkireni</h4>
                        <span className="font-weight-bold my-1">Mentor</span>
                        <span className="my-2 w-75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper condimentum ultrices. Cras euismod ornare laoreet.
                        </span>
                        <span className="far fa-comment my-2 mt-3" style={{fontSize:"40px"}}></span>
                        <span>Ask Help</span>
                    </div>
                    
                </div>
            </div>
    </div>

   
          }  
         
         </div>
        )
    }
}

export default Solve
