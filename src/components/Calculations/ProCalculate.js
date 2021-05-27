import React, { useState, useEffect } from 'react'
const ProCalculate = ({ posivnaResult }) => {

    const [chislovaNorma, setChislovaNorma] = useState();
    const [masa, setMasa] = useState();
    const [posivnaPrydatnist, setPosivnaPrydatnist] = useState();

    const [proEqual, setproEqual] = useState("");

    const enterChislovaNorma = (e) => {
        setChislovaNorma(e.target.value);
    }

    const enterMasa = (e) => {
        setMasa(e.target.value);
    }

    const enterPosivnaPrydatnist = (e) => {
        setPosivnaPrydatnist(e.target.value);
    }

    function proCalculate() {
        setproEqual((chislovaNorma * masa * 100) / posivnaPrydatnist);
    }

    useEffect(() => {
        setPosivnaPrydatnist(posivnaResult)
    }, [posivnaResult])

    return (
        <>

            <div className="proCalculate">
                <span className="titleCalculate">Розширений калькулятор</span>

                <div className="inputPoints">
                    <span className="nameArea">Числова норма</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={chislovaNorma}
                        onChange={enterChislovaNorma} />
                    <span className="indexValue">млн шт./га</span>
                </div>

                <div className="inputPoints">
                    <span className="nameArea">Маса 1000 насінин</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={masa}
                        onChange={enterMasa} />
                    <span className="indexValue">г</span>
                </div>

                <div className="inputPoints">
                    <span className="nameArea">Посівна придатність</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={posivnaPrydatnist}
                        onChange={enterPosivnaPrydatnist} />
                    <span className="indexValue">%</span>
                </div>
                <input
                    type="submit"
                    className="buttonCalculate"
                    onClick={proCalculate}
                    value="Порахувати"
                />
                <span className="indexKg">Потрібно зерна</span>
                <input className="finalPro" type="number" disabled value={Math.round(proEqual * 100) / 100} />
                <span className="kg">кг</span>
            </div>
        </>
    )
}

export default ProCalculate;