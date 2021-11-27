import React from "react";
import Description from "./pages/Description_Page";

function Description_Page() {

    return (
        <div class="container">
            <h1>Software Engineer</h1>
            <label>Location</label><br/>
            <label>Competitive salary</label><br/>
            <b>Job Description</b><br/>
            <text>As an Engineer in our Software team, you will be responsible for the Software Engineering in developing safety-critical software for aircraft systems. You will relish architecting a design to meet the customer's requirements that stand the test of time.</text><br/>
            <div class="button">
                <button>Go back</button>
                <button>Apply now</button>
            </div>
        </div>

    )

}

export default Description_Page;