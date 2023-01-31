import React from "react";
import GridItem from "../../gridItem/GrindItem";
import './Grid';

export default function Grid({itens, setItens}) {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };
    

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="tr">
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {itens?.map((item, i) => (
                        <GridItem key={i} item={item} onDelete={onDelete}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}