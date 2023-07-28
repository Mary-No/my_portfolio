import React from 'react';
import './SpinningObject.scss';

type SpinningObjectType = {
    icon: string,
    text: string,
    className: string
}
function SpinningObject(props: SpinningObjectType) {
    return (
        <div className={"spinning_object " + props.className}>
            <p className="spinning_object_text">{props.text}</p>

            <img className="spinning_object_icon" src={props.icon} alt="icon"/>
        </div>
    );
}

export default SpinningObject;