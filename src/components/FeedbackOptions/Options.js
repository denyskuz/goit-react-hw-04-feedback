import React from 'react'
import { shape, number, func } from 'prop-types';
import classes from './Options.module.css';

const Option = ({ onLeaveFeedback, options}) => {

    const handleLeaveFeedback = (id) => {
        onLeaveFeedback(id)   
    }
    return (
        <div className={classes.options}>
            {
                options && Object.keys(options).map(label => (
                    <button
                        type="button"
                        className={`${classes.btn} ${classes[label]}`}
                        key={label}
                        id={label}
                        onClick={()=> handleLeaveFeedback(label)}
                    >{label}
                    </button>
                ))
            }
        </div>
    )
 }

Option.propsTypes = {
    onLeaveFeedback: func.isRequired,
    options: shape({
        good: number.isRequired,
        neutural: number.isRequired,
        bad: number.isRequired
    })
}
export default Option;