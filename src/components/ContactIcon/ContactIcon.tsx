import React from 'react';
import './ContactIcon.scss';

type ContactIconType = {
    icon: string,
    className: string,
    link: string
}
function ContactIcon(props:ContactIconType) {
    return (
        <div>
            <a target="_blank" href={props.link}>
        <img className={"contact_icon " + props.className} src={props.icon} alt="contact_icon"/>
            </a>
        </div>
    );
}

export default ContactIcon;