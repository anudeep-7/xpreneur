import React, { Component } from 'react'

export class MenternshipDetails extends Component {
    render() {
        return (
            <div className="container p-3 mt-5">
                <div className="row my-5 justify-content-center">
                  
                    <div className="col-5 pr-5 pb-5 d-flex flex-column  ">
                        <div>
                            <div className="text-muted float-left">Human Resource</div>
                            <div className="text-muted float-right ">
                                <span>Share</span>
                                <span className="px-2 fab fa-linkedin-in"></span>
                                <span className="px-2 fab fa-facebook-f"></span>
                                <span className="px-2 fab fa-twitter"></span>
                            </div>
                        </div>
                        <h2 className="text-justify font-weight-bold pt-2 ">
                        Create a Hiring Strategy for a Leading Product Firm to Scale Their Team
                        </h2>
                        <div className="text-muted text-justify">
                        Build a hiring strategy for a leading product firm to scale their team.
                        </div>
                        <a href="/solve">
                        <div className="py-3 text-left"  style={{fontSize:"26px"}}>
                            <button className="btn btn-dark"  style={{fontSize:"26px"}}>Solve Now</button>
                            {/* <div className="fas fa-rupee-sign px-3 ">1500</div> */}
                        </div>
                        </a>
                     
                        <div className="mt-auto row text-muted align-items-center">
                            <div className="px-3">3 Chances Remaining</div>
                            <div className="px-3" style={{fontSize:"26px"}}>|</div>
                            <div>Problem Asked in        
                            </div>
                            <span className="px-3 fab fa-uber display-3 text-dark"></span>
                        </div>
                  
                    </div>
                    <div className="col-6 px-3">
                        <img src="/chanti.png" className="img-fluid img-responsive p-2 "></img>
                    </div>
                </div>
                <div className="row my-5 ml-4">
                  
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
                
              </div>
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
              <div className="row my-5 ml-4">
                  
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
            */}
            </div>
      
      )
    }
}

export default MenternshipDetails
