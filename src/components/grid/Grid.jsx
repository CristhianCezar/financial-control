import React from "react";
import GridItem from "../../gridItem/GrindItem";
import './Grid.css'


export default function Grid({itens, setItens}) {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };
    

    return (
        <React.Fragment>
            <table className="table" border={1}>
                <thead>
                    <tr className="tr">
                        <th className="th">Descrição</th>
                        <th className="th">Valor</th>
                        <th className="th">Tipo</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {itens?.map((item, i) => (
                        <GridItem key={i} item={item} onDelete={onDelete}/>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}