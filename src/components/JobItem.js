import React from 'react';

const JobItem = props => {
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
};

export default JobItem;