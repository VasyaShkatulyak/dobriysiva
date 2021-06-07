import React, { useState } from 'react'
import '../Calculations/calculate.css'

const SimpleCalculate = () => {

    const [area, setArea] = useState();
    const [equal, setEqual] = useState(0);

    function enterArea(e) {
        setArea(e.target.value);
    }

    function cultureCalculate() {
        setEqual(Number(area) * 250);
    }

    return (
        <>
            <div className="simpleCalculate">
                <span className="titleSimpleCalculate">Звичайний калькулятор</span>
                <span className="titleCulture">Пшениці</span>
                <div className="inputPoints">
                    <span className="nameSimpleArea">Площа</span>
                    <input className="inputArea" type="number" min="0" value={area} onChange={enterArea} />
                    <span className="indexValue">га</span>
                </div>
                <input
                    type="submit"
                    className="buttonSimpleCalculate"
                    onClick={cultureCalculate}
                    value="Порахувати"
                />
                <span className="indexKg">Потрібно зерна</span>
                <input className="final" type="number" disabled value={equal} />
                <span className="kg">кг/га</span>
            </div>

        </>
    )
}

export default SimpleCalculate;