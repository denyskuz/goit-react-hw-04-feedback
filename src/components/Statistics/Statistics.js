import React from 'react'
import { number } from 'prop-types';
import classes from './Statistics.module.css';

const Statistics = (props) => {
    return (
        <ul className={classes.container}>
            {
                props && Object.entries(props).map(label => <li key={label}>{`${label[0]}: ${label[1]}`}</li>)
            }
        </ul>
    )
}
Statistics.propsTypes = {
    good: number.isRequired,
    neutural: number.isRequired,
    bad: number.isRequired,
    total: number.isRequired,
    positivePercentage: number.isRequired
}
export default Statistics;