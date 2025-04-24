import logo from '../img/isabelle.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Isabelle Toniolo"/>
            <div class="header-links">
                <Link to="/">home</Link>
                <Link to="/sobre">sobre</Link>
                <Link to="/projetos">projetos</Link>
                <a href='http://www.google.com'>currículo</a>
            </div>
        </header>
    )
}