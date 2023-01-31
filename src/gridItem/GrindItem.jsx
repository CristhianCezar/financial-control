import React from "react";
import './GridItem.css';
import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaTrash} from 'react-icons/fa';


export default function GridItem({item, onDelete}) {

    const choiceIcon = item.expense ? <FaRegArrowAltCircleDown color="red"/> : <FaRegArrowAltCircleUp color="green"/>

    return (
       <div>
            <tr>
                <td className="td">{item.desc}</td>
                <td className="td">{item.amount}</td>
                <td className="td">{choiceIcon}</td>
                <td className="td">
                    <FaTrash onClick={() => onDelete(item.id)}/> 
                </td>
            </tr>
        </div>
    );
};


