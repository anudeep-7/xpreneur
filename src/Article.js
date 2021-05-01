import React, { Component } from 'react'
import "./article.css"
export class Article extends Component {
    render() {
        return (
            <div className=" d-flex flex-row justify-content-center  py-3" id="mainArticleBox">
                
                <div className="" id="icons">
                    <span className="fab fa-instagram py-3   px-2" id="socialMedia" style={{fontSize:"30px"}}></span>
                    <span className="fab fa-facebook py-3 px-2" id="socialMedia" style={{fontSize:"30px"}}></span>
                    <span className="fab fa-youtube py-3 px-2" id="socialMedia" style={{fontSize:"30px"}}></span>
                    <span className="fas fa-envelope py-3 px-2" id="socialMedia" style={{fontSize:"30px"}}></span>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center col-lg-12 col-xl-6" style={{left:"0px"}}>
                    <span id="articleHeading" style={{fontWeight:"700"}} className="py-3">
                        Introducing candidate surveys: Improve inclusive hiring practices </span>
                    <span id="articleMainInfo" style={{fontWeight:"400"}}  className="pb-5">
                    2020 has been quite the year, and we’re ready to turn the page and welcome 2021 with open arms.
                     This year, everyone had to find new ways to communicate, 
                     stay connected and do more with less. Let’s take a quick look back 
                     at the tools we built and a sneak peek at what’s coming next year.
                    </span>
                    <img src="mainArticle.png" id="articleImage"></img>
                    <div className="d-flex flex-row ml-auto">
                    <a className=" ml-auto  d-flex flex-row justify-content-center align-items-center p-2 mt-2 btn btn-link active"  id="likes">
                    <span className="far fa-thumbs-up buttonsArticle" >
                  </span>
                  <span className="px-2 buttonsArticle " >Like</span>
                    </a>
                    <a href="#bottom" className=" ml-auto  d-flex flex-row justify-content-center align-items-center p-2 mt-2 btn btn-link active"  id="comment">
                    <span className="far fa-comment buttonsArticle ">
                  </span>
                  <span className="px-2 buttonsArticle" > 26 Comments</span>
                    </a>
                  
                    </div>
                   
                    <span className="text-justify mt-4 articleInfo" >
                    In 2020, talent teams were looking for ways to diversify their sourcing channels and methods. With AI Recruiter, we helped customers immediately source 50 passive candidates from outside their existing network for every job.
                    <br></br>
                    Many companies faced unprecedented challenges due to the COVID-19 crisis. Unfortunately, with the pandemic came layoffs and furloughs at many companies. For customers trying to help former employees find a new job, we built Bridge, a tool that connects former employees with employers actively looking for candidates. 
                    <br></br>
                    The move to remote work made it harder for candidates to get a feel for company culture, meaning employer branding and careers pages became increasingly important in showcasing your company. With Branded Careers Pages, we help you put your best brand forward: flexible templates and customizable sections are included right in the Workable platform. 
                    <br></br>
                    As remote work opportunities increased, companies continued to attract talent globally. With language options, we made it easy for you to localize the entire candidate experience in the languages of your choice, available in English, French, German, Greek, Portuguese, and Spanish. 
                  </span>
                    <div className="d-flex flex-column align-items-start justify-content-start w-100 my-3">
                        <span style={{fontWeight:"600"}} className="addComment">Add Comment</span>
                        <input className="px-3 writeComment" placeholder="Write your comment here" 
                         style={{outline:"none",border:"none",width:"100%",backgroundColor:"#eeeeee"}}></input>
                         <div className="btn py-2 ml-auto my-3 " id="post" >
                             Post
                         </div>
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-start w-100 my-3">
                        <a id="bottom"></a>
                        <span style={{fontWeight:"700"}} className="addComment">Comments</span>
                        <div className="px-3 text-left py-3 d-flex flex-column my-2 comments" placeholder="Write your comment here"
                         style={{outline:"none",border:"none",width:"100%",backgroundColor:"#efefef"}}>
                             <span style={{fontWeight:"600"}}>Sandeep Reddy</span>
                             <span  className="commentInfo">I like this one and also agree to all the aspects of the agreement</span>
                         </div>
                         <div className="px-3 text-left py-3 d-flex flex-column my-2 comments" placeholder="Write your comment here"
                         style={{outline:"none",border:"none",width:"100%",backgroundColor:"#efefef"}}>
                             <span style={{fontWeight:"600"}}>Sandeep Reddy</span>
                             <span className="commentInfo" >I like this one and also agree to all the aspects of the agreement</span>
                         </div>
                         <div className="px-3 text-left py-3 d-flex flex-column my-2 comments" placeholder="Write your comment here"
                         style={{outline:"none",border:"none",width:"100%",backgroundColor:"#efefef"}}>
                             <span style={{fontWeight:"600"}}>Sandeep Reddy</span>
                             <span className="commentInfo" >I like this one and also agree to all the aspects of the agreement</span>
                         </div>
                         <div className="px-3 text-left py-3 d-flex flex-column my-2 comments" placeholder="Write your comment here"
                         style={{outline:"none",border:"none",width:"100%",backgroundColor:"#efefef"}}>
                             <span style={{fontWeight:"600"}}>Sandeep Reddy</span>
                             <span className="commentInfo" >I like this one and also agree to all the aspects of the agreement</span>
                         </div>
                         
                    </div>
               
                </div>
                {/* <div className="d-flex col-3 align-items-center" style={{height:"95vh",left:"200px",fontSize:"50px"}} >
                  <span className="far fa-thumbs-up mt-auto">
                  <span style={{fontSize:"30px",opacity:"0.8"}} className="mx-3">11 Likes</span>
                  </span>
                 
                </div>
            */}
        </div>
     
        )
    }
}

export default Article
