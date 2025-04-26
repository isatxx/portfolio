import logo from '../img/isabelle.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Isabelle Toniolo"/>
            <div class="header-links">
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href='http://www.google.com'>currículo</a>
            </div>
        </header>
    )
}