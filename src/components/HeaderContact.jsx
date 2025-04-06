import simbolo from '../assets/simbolo.svg'
import logo from '../assets/logo.svg'
import '../styles/header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header'>
            <img src={simbolo} alt="Logo" className='simbolo'/>
            <img src={logo} alt="Logo" className='logo'/>
            <div className='nav-container'>               
                <Link to="/portfolio" className='nav-link'>Portfolio</Link>
                <Link to="/" className='nav-link'>Home</Link>
            </div>

        </header>
    )
}