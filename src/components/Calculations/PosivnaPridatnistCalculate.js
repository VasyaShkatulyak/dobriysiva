import React, { useState } from 'react'

const PosivnaPridatnistCalc = () => {

    const [shojist, setShojist] = useState();
    const [chistotaNasina, setChistotaNasina] = useState();

    const [result, setResult] = useState("");

    const enterShojist = (e) => {
        setShojist(e.target.value);
    }

    const enterChistotaNasina = (e) => {
        setChistotaNasina(e.target.value);
    }

    const results = () => {
        setResult((shojist * chistotaNasina) / 100);
    }
    return (
        <>
            <div className="posivnaPridatnist">
            <span className="titleCalculate">Посівна придатність</span>
                <div className="inputPoints">
                    <span className="nameArea">Схожість насіння</span>
                    <input className="inputArea"
                        type="number"
                        value={shojist}
                        onChange={enterShojist} />
                    <span className="indexValue">%</span>
                </div>

                <div className="inputPoints">
                    <span className="nameArea">Чистота насіння</span>
                    <input className="inputArea"
                        type="number"
                        value={chistotaNasina}
                        onChange={enterChistotaNasina} />
                    <span className="indexValue">%</span>
                </div>
                <input
                    type="submit"
                    className="buttonPosivna"
                    onClick={results}
                    value="Порахувати"
                />

                <span className="indexPosivna">Потрібно зерна</span>
                <input className="posivnaResult" type="number" disabled value={Math.round(result * 100) / 100} />
                <span className="kg">%</span>
            </div>

        </>
    )

}

export default PosivnaPridatnistCalc;