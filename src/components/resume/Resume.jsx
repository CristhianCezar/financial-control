import React from "react";
import './Resume.css';
import ResumeItem from "../resumeItem/ResumeItem";
import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign} from 'react-icons/fa';

export default props => {
    return (
        <div className="resume">
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp}/>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem title="Total" Icon={FaDollarSign}/>
        </div>
    )
}