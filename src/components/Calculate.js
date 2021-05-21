import React, { useState } from 'react'

const Calculate = () => {

    const [area, setArea] = useState();
    const [chislovaNorma, setChislovaNorma] = useState();
    const [masa, setMasa] = useState();
    const [posivnaPrydatnist, setPosivnaPrydatnist] = useState();


    const [equal, setEqual] = useState("");
    const [proEqual, setproEqual] = useState("");


    function enterArea(e) {
        setArea(e.target.value);
    }

    const enterChislovaNorma = (e) => {
        setChislovaNorma(e.target.value);
    }

    const enterMasa = (e) => {
        setMasa(e.target.value);
    }

    const enterPosivnaPrydatnist = (e) => {
        setPosivnaPrydatnist(e.target.value);
    }

    function cultureCalculate() {
        setEqual(Number(area) * 250);
    }
    function proCalculate() {
        setproEqual((chislovaNorma * masa * 100) / posivnaPrydatnist);
    }

    return (
        <>
            <h1>Норма висіву пшениці</h1>
            <div className="main">

                <div className="simpleCalculate">
                    <span className="titleCalculate">Простий калькулятор</span>
                    <div className="inputPoints">
                        <span className="nameArea">Площа</span>
                        <input className="inputArea" type="number" min="0" value={area} onChange={enterArea} />
                        <span className="indexValue">га</span>
                    </div>
                    <input
                        type="submit"
                        className="buttonCalculate"
                        onClick={cultureCalculate}
                        value="Порахувати"
                    />
                    <input className="final" type="number" value={equal} />
                    <span className="kg">кг</span>
                </div>


                <div className="proCalculate">
                    <span className="titleCalculate">Розширений калькулятор</span>

                    <div className="inputPoints">
                        <span className="nameArea">Числова норма</span>
                        <input className="inputArea"
                            type="number"
                            value={chislovaNorma}
                            onChange={enterChislovaNorma} />
                        <span className="indexValue">млн шт./га</span>
                    </div>

                    <div className="inputPoints">
                        <span className="nameArea">Маса 1000 насінин</span>
                        <input className="inputArea"
                            type="number"
                            value={masa}
                            onChange={enterMasa} />
                        <span className="indexValue">г</span>
                    </div>

                    <div className="inputPoints">
                        <span className="nameArea">Посівна придатність</span>
                        <input className="inputArea"
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
                    <input className="finalPro" type="number" value={Math.round(proEqual * 100) / 100} />
                    <span className="kg">кг</span>
                </div>
            </div>
        </>
    )
}

export default Calculate;