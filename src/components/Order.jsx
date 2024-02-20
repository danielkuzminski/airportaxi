//styles
import "./Order.css"

//assets
import whatsapp from "../assets/WhatsAppButtonGreenLarge.png"

// react
import { useState } from "react"

export default function Order() {
	//whatsapp chat function
	const [from, setFrom] = useState("")
	const [to, setTo] = useState("")
	const [when, setWhen] = useState(null)
	const [hour, setHour] = useState(null)
	const [flight, setFlight] = useState("")
	const [name, setName] = useState("")

	const resetForm = () => {
		setFrom("")
		setTo("")
		setWhen(null)
		setHour(null)
		setFlight("")
		setName("")
	}

	const handleWhatsapp = e => {
		e.preventDefault()

		const phonenumber = "353877759009"

		let url = `https://wa.me/${phonenumber}?text=could_you_collect_me_from%20${from}%20and_drop_me_to%20${to}%20on%20${when}%20at%20${hour}%20%20my_flight_number_is%20${flight}%20%20and_my_name_is%20${name}`

		window.open(url, "_blank").focus()

		resetForm()
	}

	return (
		<div className="container">
			<form className="order" onSubmit={handleWhatsapp}>
				<h2 className="order__title">Request Transfer</h2>
				<label>
					<span>from:</span>
					<input
						type="text"
						required
						placeholder="collect me..."
						onChange={e => {
							setFrom(e.target.value)
						}}
						value={from}
					/>
				</label>
				<label>
					<span>to:</span>
					<input
						type="text"
						required
						placeholder="destination..."
						onChange={e => {
							setTo(e.target.value)
						}}
						value={to}
					/>
				</label>
				<label>
					<span>date:</span>
					<input
						type="date"
						required
						onChange={e => {
							setWhen(e.target.value)
						}}
						value={when}
					/>
				</label>
				<label>
					<span>time:</span>
					<input
						type="time"
						onChange={e => {
							setHour(e.target.value)
						}}
						value={hour}
					/>
				</label>
				<label>
					<span>flight number: *</span>
					<input
						type="text"
						placeholder="arrival / departure flight "
						onChange={e => {
							setFlight(e.target.value)
						}}
						value={flight}
					/>
				</label>
				<label>
					<span>your name:</span>
					<input
						type="text"
						placeholder="your name"
						onChange={e => {
							setName(e.target.value)
						}}
						value={name}
					/>
				</label>
				<button className="order__submit">
					<img className="whatsapp" src={whatsapp} alt="" />
				</button>
			</form>
			<span className="landing__underline"></span>
		</div>
	)
}
