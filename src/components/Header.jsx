import logo from '../assets/logo.webp'
import './Header.css'

export default function Header() {
  return <header className='heading'>
    <img src={logo} alt="Investment Calculator" className='logo'/>
    <h1 className='header'> Investment Calculator </h1>
  </header>
}