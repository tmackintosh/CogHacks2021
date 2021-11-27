import React from 'react';

const JobItem = props => {
    const jobPosition = props.info.jobPosition;
    const salary = props.info.salary;
    const location = props.info.location;
    const hours = props.info.hours;

    return(
        <div class="listing">
            <h2>Job Position: {jobPosition}</h2>
            <h3>Salary: {salary}</h3>
            <h3>Location: {location}</h3>
            <h3>Hours: {hours}</h3>
        </div>
    );
};

export default JobItem;
