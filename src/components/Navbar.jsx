//styles
import './Navbar.css'

//assets
import logo from '../assets/logo.jpg'
import arrivals from "../assets/arrivals.jpg"


export default function Hamburger() {
  return (
    <div className="navbar">
        <div className='nav-container'>
          <img src={logo} alt="" className="logo" />
          <h2 className='logo-text'>airpor<small>t</small>axi</h2>
        </div>
        <img src={arrivals} alt='airport arrivals and departure gates' className='landing__img' />
    </div>
  )
}