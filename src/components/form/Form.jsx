import React, {useState} from "react";
import './Form.css';

export default prosp => {

        const [desc, setDesc] = useState("");
        const [amount, setAmount] = useState(""); 
        const [isExpense, setIsExpense] = useState(false);

        const handlesalve= () => {
            if(!desc || !amount) {
                alert("Informe a descrição e o valor!");
                return;
            } else if(amount < 0.1) {
                alert("O valor tem que ser positivo!");
                return;
            }
        }

        return (
            <div className="form">
                <div className="inputContent">
                    <label htmlFor="descript">Descrição</label>
                    <input id="descript" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>

                <div className="inputContent">
                    <label htmlFor="value">Valor</label>
                    <input id="value" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>

                <div className="inputContent">
                    <div className="radioGroup">
                        <input type="radio" name="group1" id="rIncome" defaultChecked onChange={() => setIsExpense(!isExpense)}/>
                        <label htmlFor="rIncome">Entrada</label>
                        <input type="radio" name="group1" id="rExpenses" defaultChecked onChange={() => setIsExpense(!isExpense)}/>
                        <label htmlFor="rExpenses">Saída</label>
                    </div>
                </div>

                <div className="inputContent">
                    <button className="button" onClick={handlesalve}>Adicionar</button>
                </div>
            </div>
        )
 }