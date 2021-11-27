import React, { useState } from 'react';
import "./Job_listings.css";

function getListing(props) {
        return(
            <React.Fragment>
            <div class="listing">
                <h2>Job Position: {props.jobPosition}</h2>
                <h3>Salary: {props.salary}</h3>
                <h3>Location: {props.location}</h3>
                <h3>Hours: {props.hours}</h3>
            </div>
            </React.Fragment>
            
        );
}

const jobListing = () => {
    {{getListingRawVals("SoftwareDev", "$22,000", "London", "15")}}
}


function getListingRawVals(position, salary, location, hours){
    alert("Hi");
    return <getListing jobPosition={position} salary={salary} location={location} hours={hours}/>
}

function Job_listings() {
        return (

            <div class="container">
                <div class="listing">
                    <h3>test</h3>
                    <getListing jobPosition="SoftwareDev" salary="$22,000" location="London" hours="15"/>
                    {getListingRawVals("SoftwareDev", "$22,000", "London", "15")}
                    <jobListing/>
                </div>
            </div>
        );
    
}

export default Job_listings;