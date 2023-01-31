import React from "react";
import './Grid.css'
import GridItem from "../gridItem/GrindItem";


export default function Grid({ itens, setItens }) {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };


    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr className="tr">
                        <th className="th">Descrição</th>
                        <th className="th">Valor</th>
                        <th className="th">Tipo</th>
                        <th className="thNull"> </th>
                    </tr>
                </thead>

                <tbody className="tBody">
                    {itens?.map((item, i) => (
                        <GridItem key={i} item={item} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}