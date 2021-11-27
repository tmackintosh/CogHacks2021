import React from "react";
import "./ShowEmployer.css";

function ShowEmployer_Page() {

    return (
        <div class="container">
            <div class="header">
                <img src="https://www.totaljobs.com/CompanyLogos/ba329a25e4634b4790ea22f64f6328bd.png"/>
                <h1>esure Group</h1>
            </div>
            <div class="greyRow">
                <label>Bath</label><br/>
            </div>
            <div class="whiteRow">
                <label>£50,0000 - £85,000</label><br/>
            </div>
            <div class="greyRow">
                <label>Permanent</label>
            </div>
            <div class="whiteRow">
                <label><b>Job Description</b></label><br/>
            </div>
            <div class = "whiteRow">
                <text>We are harnessing data science approaches to build end-to-end solutions which will help our business drive further value from data and create personalised experiences for our customers. We apply state of the art machine learning techniques to solve a variety of problems such as customer risk, lifetime value and retail pricing across diverse product portfolios. Many Data Science projects are at greenfield stage with the chance to have significant impact on the P&L. The team is central to our growth strategy with great support from senior Stakeholders who are keen to drive a 'start-up mentality' for this function.</text><br/>
            </div>
            <div class="button">
                <button>Go back</button>
                <div class="divider"/>
                <button>Register Interest</button>
            </div>
            
        </div>
    )

}

export default ShowEmployer_Page;