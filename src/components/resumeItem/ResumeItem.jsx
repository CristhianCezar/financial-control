import React from "react";
import './ResumeItem.css';

export default ({title, Icon, value}) => {
    return (
        <div className="resumeItem"> 
            <div className="headerResumeItem">
                <h2 className="titleResumeItem">{title}</h2>
                <Icon/>
            </div>
            <div className="totalResumeItem">{value}</div>
        </div>
    )
}