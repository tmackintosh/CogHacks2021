import React from "react";
import "./Descriptions.css";

function Description_Page() {

    return (
        <div class="container">
            <h1>We think these jobs match your characterisitcs...</h1>
            <div class="jobBox">
                <h1>Software Engineer</h1>
                <div class="greyRow">
                    <label>Bath</label><br/>
                </div>
                <div class="whiteRow">
                    <label>Competitive salary</label><br/>
                </div>
                <div class="greyRow">
                    <label>Permanent, 40 hours/week</label>
                </div>
                <div class="whiteRow">
                    <label><b>Job Description</b></label><br/>
                </div>
                <div class = "whiteRow">
                    <text>As an Engineer in our Software team, you will be responsible for the Software Engineering in developing safety-critical software for aircraft systems. You will relish architecting a design to meet the customer's requirements that stand the test of time.</text><br/>
                </div>
                <div class="button">
                    <button>Go back</button>
                    <div class="divider"/>
                    <button>Apply now</button>
                </div>
            </div>
            
            <div class="jobBox">
            <h1>Data Scientist</h1>
                <div class="greyRow">
                    <label>Bristol</label><br/>
                </div>
                <div class="whiteRow">
                    <label>Competitive salary</label><br/>
                </div>
                <div class="greyRow">
                    <label>Permanent, 40 hours/week</label>
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
                    <button>Apply now</button>
                </div>
            </div>
        
        </div>
    )

}

export default Description_Page;