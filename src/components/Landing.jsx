//styles
import "./Landing.css"

export default function Landing() {
	return (
		<div className='landing'>
			<h1 className='landing__title'>Welcome to AirporTaxi</h1>
			<p className='landing__text'>
				Your Gateway to Seamless Airport Transfers in Ireland!
			</p>
			<br />
			<h2 className="landing__title">Elevate Your Arrival Experience</h2>
			<p className="landing__text">
				At AirpoTaxi, we go beyond transportation – we craft
				experiences. Step into the heart of Ireland with our premium airport
				taxi services. Your journey begins the moment you land, ensuring a warm
				Irish welcome and a ride that reflects the charm of this beautiful
				country.
			</p>
			<span className='landing__underline'></span>
		</div>
	)
}