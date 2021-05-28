import React, { useState, useEffect } from 'react'

const CalculateCorn = ({ posivnaResult }) => {

    const [normaVisivy, setNormaVisivy] = useState({
        norma: '',
        hustota: '',
        posivnaPrydatnist: '',
        shirinaMijriadya: '36',
        pogonniyMeter: '',
        area: '',
        areaCount: ''
    })

    const { norma, hustota, posivnaPrydatnist, shirinaMijriadya, pogonniyMeter, area, areaCount } = normaVisivy

    const enterHustota = (e) => {
        setNormaVisivy({ ...normaVisivy, hustota: e.target.value })
    }
    const enterPosivnaPrydatnist = (e) => {
        setNormaVisivy({ ...normaVisivy, posivnaPrydatnist: e.target.value })
    }

    const enterShirinaMijriadya = (e) => {
        setNormaVisivy({ ...normaVisivy, shirinaMijriadya: e.target.value })
    }

    const enterArea = (e) => {
        setNormaVisivy({ ...normaVisivy, area: e.target.value })
    }

    const cornCalculation = () => {

        const equal = hustota * 100 / posivnaPrydatnist;
        const equalMeter = equal / (1 / shirinaMijriadya * 1000);
        const equalArea = equal * area;

        setNormaVisivy({ ...normaVisivy, norma: equal, areaCount: equalArea, pogonniyMeter:  equalMeter})
    }

    useEffect(() => {
        setNormaVisivy({...normaVisivy, posivnaPrydatnist: posivnaResult})
    }, [posivnaResult])

    return (
        <>
            <div className="cornCalculate">
                <span className="titleCalculate">Калькулятор кукурудзи</span>

                <div className="inputPoints">
                    <span className="nameArea">Рекомендована густота стояння</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={hustota}
                        onChange={enterHustota} />
                    <span className="indexValue">тис. шт./га</span>
                </div>

                <div className="inputPoints">
                    <span className="nameArea">Посівна придатність</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={posivnaPrydatnist}
                        onChange={enterPosivnaPrydatnist} />
                    <span className="indexValue">%</span>
                </div>

                <div className="inputPoints">
                    <span className="nameArea">Ширина міжряддя</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={shirinaMijriadya}
                        onChange={enterShirinaMijriadya} />
                    <span className="indexValue">см</span>
                </div>

                <div className="inputPoints">
                    <span className="nameArea">Площа під посів</span>
                    <input className="inputAreaPro"
                        type="number"
                        value={area}
                        onChange={enterArea} />
                    <span className="indexValue">га</span>
                </div>


                <input
                    type="submit"
                    className="buttonCalculate"
                    onClick={cornCalculation}
                    value="Порахувати"
                />
                <span className="indexKg">Норма висіву</span>
                <input className="finalPro" type="number" disabled value={Math.round(norma * 10) / 10} />
                <span className="kg">тис. шт./га</span>

                <span className="indexKg">Норма висіву на метр погонний</span>
                <input className="finalPro" type="number" disabled value={Math.round(pogonniyMeter * 10) / 10} />
                <span className="kg">насінин на м²</span>

                <span className="indexKg">Для площі {area} га. потрібно</span>
                <input className="finalPro" type="number" disabled value={Math.round(areaCount * 10) / 10} />
                <span className="kg">тис. шт./га</span>


            </div>
        </>
    )

}

export default CalculateCorn;