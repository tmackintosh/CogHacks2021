import React from 'react';

const JobItem = props => {
    return(
        <React.Fragment>
        <form method="post">
                <input id="ans_1" input type="radio" name="carrier" value="ans_one" /> Strongly Agree
                <input id="ans_2" input type="radio" name="carrier" value="ans_two" /> Agree
                <input id="ans_3" input type="radio" name="carrier" value="ans_three" checked/> Neutral
                <input id="ans_4" input type="radio" name="carrier" value="ans_four" /> Disagree
                <input id="ans_5" input type="radio" name="carrier" value="ans_five" /> Strongly Disagree
            </form>
        </React.Fragment>
    );
};

export default JobItem;