import React from 'react'
import '../CalculationCards/Zernovi.css'
import Pshenica from '../../img/Card_7.png'
import Corn from '../../img/Card_6.png'
import Corn2 from '../../img/Card_8.png'
import { Link } from 'react-router-dom'



const ZernoviCard = () => {

	return (
		<>
		<div className="home_main">
		<h1 className="h1">Виберіть культуру для обчислення</h1>
			<div class="container">
				<div className="card">
					<img className="img" src={Pshenica} alt="afsdga"/>
					<span className="card_title">БУРЯК</span>
					<div id="btn"><Link class="noselect" to="oves">Обчислити</Link></div>
				</div>
				<div className="card">
				<img className="img" src={Corn} alt="afsdga"/>
				<span className="card_title1">ПШЕНИЦЯ</span>
				<div id="btn"><Link class="noselect" to='/zernovi'>Обчислити</Link></div>
				</div>
				<div className="card">
				<img className="img" src={Corn2} alt="afsdga"/>
				<span className="card_title2">КУКУРУДЗА</span>
				<div id="btn"><Link class="noselect" to='/corn'>Обчислити</Link></div>
				</div>
			</div>
			</div>
		</>
	)
}

export default ZernoviCard;