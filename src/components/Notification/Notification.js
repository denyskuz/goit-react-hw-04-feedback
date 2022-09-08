import React from 'react'
import { string } from 'prop-types';
import classes from './Notification.module.css';

const Notification = ({ message })=>  {
    return (
        <p className={classes.message}>{message}</p>
    )
}
 
Notification.propsTypes = {
    message: string.isRequired
}
export default Notification;