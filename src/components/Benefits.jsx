//styles
import "./Benefits.css"

//assets
import taxi from "../assets/taxi.jpg"
import booking from "../assets/booking.jpg"
import ireland from "../assets/ireland.jpg"
import fleet from "../assets/fleet.jpg"
import pricing from "../assets/pricing.jpg"
import safety from "../assets/safety.jpg"
import begin from "../assets/begin.jpg"

export default function Benefits() {
	return (
		<div className='benefits'>
			<h2 className='benefits__main'>Why to choose us?</h2>
			<div className='benefits__section'>
				<img src={taxi} alt='taxi in city traffic' className='benefits__img' />
				<h4 className='benefits__title'>Unparalleled Convenience</h4>
				<p className='benefits__text'>
					Say goodbye to the stress of travel logistics. Our fleet of modern
					vehicles and professional drivers are here to ensure your transition
					from airport to destination is as smooth as a pint of Guinness. We're
					not just a taxi service; we're your trusted partners in exploring the
					magic of Ireland.
				</p>
				<span className='landing__underline'></span>
			</div>
			<div className='benefits__section'>
				<img
					src={ireland}
					alt='Ireland Waterford view'
					className='benefits__img'
				/>
				<h4 className='benefits__title'>Explore Ireland in Comfort</h4>
				<p className='benefits__text'>
					Beyond airport transfers, we invite you to explore Ireland with us.
					Our knowledgeable drivers can guide you through the scenic landscapes,
					historic landmarks, and vibrant cities. It's not just a ride; it's a
					journey through the soul of Ireland.
				</p>
				<span className='landing__underline'></span>
			</div>
			<div className='benefits__section'>
				<img
					src={fleet}
					alt='taxi in pole position in traffic'
					className='benefits__img'
				/>
				<h4 className='benefits__title'>Fleet Excellence</h4>
				<p className='benefits__text'>
					Our fleet is a testament to our commitment to quality. Immerse
					yourself in the comfort of our well-maintained vehicles, each ride
					promising a blend of luxury, reliability, and the renowned Irish
					hospitality.
				</p>

				<span className='landing__underline'></span>
			</div>

			<div className='benefits__section'>
				<img
					src={booking}
					alt='a man booking our transport'
					className='benefits__img'
				/>
				<h4 className='benefits__title'>Booking Simplicity</h4>
				<p className='benefits__text'>
					Booking with AirporTaxi is as easy as a stroll through the lush Irish
					countryside. Use our user-friendly online platform or mobile app,
					ensuring that your taxi is ready and waiting for you, whether you're
					landing at Dublin, Shannon, or any other Irish airport.
				</p>
				<span className='landing__underline'></span>
			</div>
			<div className='benefits__section'>
				<img src={pricing} alt='cash' className='benefits__img' />
				<h4 className='benefits__title'>Transparent Pricing</h4>
				<p className='benefits__text'>
					No leprechaun tricks here – just straightforward and transparent
					pricing. Check our rates to see how affordable comfort can be. Your
					satisfaction is our pot of gold!
				</p>
				<span className='landing__underline'></span>
			</div>
			<div className='benefits__section'>
				<img
					src={safety}
					alt='passenger fastening seatbelt'
					className='benefits__img'
				/>
				<h4 className='benefits__title'>Safety is Our Priority</h4>
				<p className='benefits__text'>
					Rest assured, your safety is paramount. Our drivers are experienced,
					courteous, and well-versed in Irish roads. Trust AirporTaxi for a
					secure and pleasant journey.
				</p>
				<span className='landing__underline'></span>
			</div>
			<div className='benefits__section'>
				<img
					src={begin}
					alt='sign that says new way'
					className='benefits__img'
				/>
				<h4 className='benefits__title'>Let the Journey Begin!</h4>
				<p className='benefits__text'>
					Your adventure in Ireland starts with AirporTaxi. Contact us at{" "}
					<i class='fa-solid fa-phone'></i> or email us{" "}
					<i class='fa-solid fa-envelope'></i> to book your taxi and embark on a
					journey where every mile is a story and every destination is a
					discovery. Welcome aboard!
				</p>
				<span className='landing__underline'></span>
			</div>
		</div>
	)
}