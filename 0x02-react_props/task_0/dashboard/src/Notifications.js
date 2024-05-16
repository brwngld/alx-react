import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import {getLatestNotification} from './utils';

export const Notifications = () => {
    const handelClose = () => {
        console.log('Close button has been clicked')
    }
    const defaultPriority = () => {
        return {
            color: 'blue',
        }     
    }
    const urgentPriority = () => {
        return {
            color: 'red',
        }     
    }
    const buttonStyle = {
        display: 'inline-block',
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 0,
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        };
    return <div className="Notifications">
        <button aria-label='close' style={buttonStyle} onClick={handelClose}><img src={close_icon} alt="" style={{ width: '12px', height: '12px' }} /></button>
        <p>Here is the list of notifications</p>
        <ul>
        <li style = {defaultPriority()}>New course available</li>
        <li style = {urgentPriority()}>New resume available</li>
        <li style = {urgentPriority()}> <div
            dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
          ></div></li>
        </ul>
    </div>
}

export default Notifications;