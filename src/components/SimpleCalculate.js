import React, { useState } from 'react'

const SimpleCalculate = () => {
    
    const [area, setArea] = useState();
    const [equal, setEqual] = useState(0);

    function enterArea(e) {
        setArea(e.target.value);
    }

    function cultureCalculate() {
        setEqual(Number(area) * 250);
    }


    return(
        <>
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
                    <input className="final" type="number" disabled value={equal} />
                    <span className="kg">кг</span>
                </div>
        </>
    )
}

export default SimpleCalculate;