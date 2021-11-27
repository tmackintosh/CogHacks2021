import React from "react";
import Description from "./pages/Description_Page";

function Description_Page() {

    return (
        <div class="container">
        <div class="signupboxes">
            <h1>Software Engineer</h1>
            <div class="row">
                <label>Location</label><br/>
            </div>
            <label>Competitive salary</label><br/>
            <div class="row">
                <b>Job Description</b><br/>
            </div>
                <text>As an Engineer in our Software team, you will be responsible for the Software Engineering in developing safety-critical software for aircraft systems. You will relish architecting a design to meet the customer's requirements that stand the test of time.</text><br/>
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