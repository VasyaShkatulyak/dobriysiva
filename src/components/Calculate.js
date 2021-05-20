import React, { useState } from 'react'

const Calculate = () => {

    const [area, setArea] = useState();

    const [data, setData] = useState({
        kilkistNasinnya: 0,
        masaNasinnya: 0,
        posivnaPrydatnist: 0,
        chystotaNasinnya: 0,
        shogistNasinnya: 0,
    });
    const [equal, setEqual] = useState("");
    const [proEqual, setproEqual] = useState("");

    const calculate = (data) => {
        const { kilkistNasinnya, masaNasinnya, posivnaPrydatnist, chystotaNasinnya, shogistNasinnya } = data
    }

    function enterData(e) {
        setData(e.target.value);
    }

    function enterArea(e) {
        setArea(e.target.value);
    }

    function cultureCalculate() {
        setEqual(area * 250);
    }
    function proCalculate(){
        setproEqual(data * 10);
    }

    return (
        <>
        <h1>Норма висіву пшениці</h1>
            <div className="main">

                <div className="simpleCalculate">
                    <span className="titleCalculate">Простий калькулятор</span>
                    <input className="inputArea" type="number" value={area} onChange={enterArea} />
                    <span>га</span>
                    <input
                        type="submit"
                        className="CalculateFormula"
                        onClick={cultureCalculate}
                        value="Обчислити"
                    />
                    <input className="final" type="number" value={equal} />
                    <span className="kg">кг</span>
                </div>


                <div className="proCalculate">
                    <span className="titleCalculate">Розширений калькулятор</span>
                    <span>Кількість насіння на 1 га</span>
                    <input className="inputArea" 
                           type="number" 
                           value={data.kilkistNasinnya} 
                           onChange={enterData} />
                           <br></br>
                    <span>Схожість насіння</span>
                    <input className="inputArea" 
                           type="number" 
                           value={data.shogistNasinnya} 
                           onChange={enterData} />
                    <span>df</span>
                    <input
                        type="submit"
                        className="CalculateFormula"
                        onClick={proCalculate}
                        value="Обчислити"
                    />
                    <input className="finalPro" type="number" value={proEqual} />
                    <span className="kg">кг</span>
                </div>
            </div>
        </>
    )
}

export default Calculate;