import React from 'react';
import { string, element } from 'prop-types';
import classes from './Section.module.css';

const Section = ({ children, title}) => {

    return (
        <div className={classes.section}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}
Section.propTypes = {
    children: element.isRequired,
    title: string.isRequired
};
export default Section;