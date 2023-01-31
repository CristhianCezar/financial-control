import React from "react";
import './Resume.css';
import ResumeItem from "../resumeItem/ResumeItem";
import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign} from 'react-icons/fa';

export default ({income, expense, total}) => {
    return (
        <div className="resume">
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp}  value={income}/>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
        </div>
    )
}