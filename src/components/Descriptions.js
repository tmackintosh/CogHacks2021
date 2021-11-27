import React from "react";
import "./Descriptions.css";

function Description_Page() {

    return (
        <div class="scrollable">
            <div class="container">
                <h1>Software Engineer</h1>
                <div class="greyRow">
                    <label>Location</label><br/>
                </div>
                <div class="whiteRow">
                    <label>Competitive salary</label><br/>
                </div>
                <div class="greyRow">
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
        
        </div>
    )

}

export default Description_Page;