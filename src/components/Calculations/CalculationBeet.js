import React, { useState } from 'react'

const CalculateBeet = () => {

    const [normaVisivyBeet, setNormaVisivyBeet] = useState({
        normaBeet: '',
        countShodiv: '',
        areaShojist: '',
        normaGectar: '',
        constArea: '',
        areaNorma: '',
    })

    const { normaBeet, countShodiv, areaShojist, normaGectar, constArea, areaNorma } = normaVisivyBeet

    const enterCountShodiv = (e) => {
        setNormaVisivyBeet({ ...normaVisivyBeet, countShodiv: e.target.value })
    }
    const enterAreaShojist = (e) => {
        setNormaVisivyBeet({ ...normaVisivyBeet, areaShojist: e.target.value })
    }

    const enterConstArea = (e) => {
        setNormaVisivyBeet({ ...normaVisivyBeet, constArea: e.target.value })
    }

    const beetCalculation = () => {

        const equalBeet = 100 * (countShodiv / areaShojist);
        const equalGectar = equalBeet * 1000;
        const equalArea = equalGectar*constArea;

        setNormaVisivyBeet({ ...normaVisivyBeet, normaBeet: equalBeet, normaGectar: equalGectar,  areaNorma: equalArea})
    }


    return (
        <>
            <div className="beetCalculate">
                <span className="titleBeet">Калькулятор буряка</span>

                <div className="inputPoints">
                    <span className="nameBeet">Запланована кількість сходів</span>
                    <input className="inputAreaPro"
                        type="number"
                        min="0"
                        value={countShodiv}
                        onChange={enterCountShodiv} />
                    <span className="indexValue">шт/м</span>
                </div>

                <div className="inputPoints">
                    <span className="nameBeet">Польова схожість насіння</span>
                    <input className="inputAreaPro"
                        type="number"
                        min="0"
                        max="100"
                        value={areaShojist}
                        onChange={enterAreaShojist} />
                    <span className="indexValue">%</span>
                </div>

                <div className="inputPoints">
                    <span className="nameBeet">Площа під посів</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={constArea}
                        onChange={enterConstArea} />
                    <span className="indexValue">га</span>
                </div>

                <input
                    type="submit"
                    className="buttonCalculateBeet"
                    onClick={beetCalculation}
                    value="Порахувати"
                />
                <span className="indexBeet">Норма висіву</span>
                <input className="finalBeet" type="number" disabled value={Math.round(normaBeet * 10) / 10} />
                <span className="kg">шт/м</span>

                <span className="indexBeet">Норма висіву на гектар</span>
                <input className="finalBeet" type="number" disabled value={Math.round(normaGectar * 10) / 10} />
                <span className="kg">шт/га</span>

                <span className="indexBeet">Норма висіву на {constArea} га</span>
                <input className="finalBeet" type="number" disabled value={Math.round(areaNorma * 10) / 10} />
                <span className="kg">шт/га</span>

            </div>
        </>
    )

}

export default CalculateBeet;