import React from "react";
import "./ShowEmployer.css";

function ShowEmployer_Page() {

    return (
        <div class="container">
            <div class="header">
                <img src="https://www.totaljobs.com/CompanyLogos/8e9781d5542f4995b383dee7d0b8c8b9.png"/>
                <h1>Trust Doctor in Anaesthesia</h1>
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
                <text>We are seeking enthusiastic individuals to join our trainees in the provision of daytime anaesthesia in a supervised capacity. Training and supervision will be provided in a manner similar to our existing trainees and will take into account the candidate’s educational requirements. In addition, the successful candidates would partake in the senior anaesthetic trainee or obstetric trainee on-call rota, alongside ST3 and CT-level anaesthetic trainees. There may be a three months placement on the Critical Care Unit in line with Royal College guidance.</text><br/>
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