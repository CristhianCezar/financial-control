import React from "react";
import './Resume.css';
import ResumeItem from "../resumeItem/ResumeItem";
import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign} from 'react-icons/fa';

export default props => {
    return (
        <div className="resume">
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp}  value="1000"/>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000"/>
            <ResumeItem title="Total" Icon={FaDollarSign} value="1000"/>
        </div>
    )
}