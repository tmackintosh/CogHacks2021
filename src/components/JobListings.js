import React, { useState } from 'react';
import "./Job_listings.css";
import JobItem from './JobItem';

const getAllJobListings = () => {
    var jobListingsSize = 1; /* TODO: Get all matched listings*/

    let JobItemsArray = [
        {jobPosition: 'Software Engineer', salary: '£35,000', location: 'London', hours: '25', index: '0'},
        {jobPosition: 'Doctor', salary: '£69,000', location: 'Leeds', hours: '67', index: '1'}
        ];

        return (
        JobItemsArray.map( (item) =>
            <React.Fragment>
                <JobItem onClick={() => openJobListing(item)} info={item} />         
            </React.Fragment>
            )
        );

}

const openJobListing = (info) => {
    alert("Clicked");
    /* Todo handle stored info for clicked listing */
}

const JobListings = () => {
    return (
        <div class="container">
                <h1>Job Listings</h1>
                <p1 class="subtitle">A list of jobs looking for you</p1>

                <div class="listingContainer">
                    {getAllJobListings()}
                </div>
            
        </div>
    );
};


export default JobListings;