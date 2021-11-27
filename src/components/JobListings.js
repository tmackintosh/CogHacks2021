import React, { useState } from 'react';
import "./Job_listings.css";
import JobItem from './JobItem';

const getJobItemsList = JobItemsList => {
    return (
        <React.Fragment>
        {JobItemsList.map(({ jobPosition, salary, location, hours, index }) => (
            <JobItem jobPosition={jobPosition} salary={salary} location={location} hours={hours}/>
        ))}
        </React.Fragment>
    );
}

const getAllJobListings = () => {
    var jobListingsSize = 1; /* TODO: Get all matched listings*/

    let JobItemsArray = [
        {jobPosition: 'Software Engineer', salary: '$35,000', location: 'London', hours: '25', index: '0'},
        {jobPosition: 'Doctor', salary: '$69,000', location: 'Leeds', hours: '67', index: '1'},
        ];

        return (
        JobItemsArray.map( (item) =>
            <React.Fragment>
                <JobItem onClick={openJobListing(item)} info={item} />
            </React.Fragment>
            )
        );

}

const openJobListing = (info) => {
    /* Todo handle stored info for clicked listing */
}

const JobListings = () => {
    return (
        <div class="container">
                <h1>Job Listings</h1>
                <h2>A list of jobs looking for you</h2>
            <div class="listing">
                {getAllJobListings()}
            </div>
        </div>
    );
};


export default JobListings;