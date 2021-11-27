import React, { useState } from 'react';
import "./Job_listings.css";
import JobItem from './JobItem';

const JobListings = () => {
    return (
        <div class="container">
                <h1>Job Listings</h1>
                <h2>A list of jobs looking for you</h2>
            <div class="listing">
                <JobItem jobPosition="SoftwareDev" salary="$22,000" location="London" hours="15"/>
            </div>
        </div>
    );
};


export default JobListings;