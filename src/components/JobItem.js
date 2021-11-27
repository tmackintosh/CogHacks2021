import React from 'react';

const JobItem = props => {
    let info = [
        props.info.jobPosition,
        props.info.salary,
        props.info.location,
        props.info.hours]

    return(
        <div class="listing">
            <h2>Job Position: <a href="/questions">{info[0]}</a></h2>
            <h3>Salary: {info[1]}</h3>
            <h3>Location: {info[2]}</h3>
            <h3>Hours: {info[3]}</h3>
        </div>
    );
};

export default JobItem;
