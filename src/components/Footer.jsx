//styles
import "./Footer.css"

// assets
import logo from "../assets/logo.jpg"

export default function Footer() {
	return (
		<div className='footer'>
			<div className='contact'>
				<p className='contact__details'>contact details: </p>
				<div>
					<i class='fa-solid fa-phone'></i>
					<a className='phone' href='tel:00353877759009'>
						Call us +353877759009
					</a>
				</div>
				<div>
					<i class='fa-solid fa-envelope'></i>
					<a className='phone' href='mailto:airpotaxi@airportaxi.ie'>
						Email us airpotaxi@airportaxi.ie
					</a>
				</div>
			</div>
			<img src={logo} alt='logo' className='logo' />
		</div>
	)
}