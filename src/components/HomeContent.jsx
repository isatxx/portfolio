import linkedin from '../img/linkedin-logo-bold.svg'
import gmail from '../img/envelope-simple-bold.svg'
import github from '../img/github-logo-bold.svg'
import instagram from '../img/instagram-logo-bold.svg'

export default function HomeContent() {
    return(
        <main className='home-main'>

            <div class="home-introduction">
                <p>Olá! Me chamo Isabelle,</p>
                <h1>EU SOU UMA<br/>PROGRAMADORA</h1>
                <p>Seja bem-vindo(a) ao meu portifólio.</p>
                <p>Saiba mais sobre mim e minhas habilidades neste site! :D</p>

                <div class="home-contact">
                    <a class="tooltip" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/isabelle-toniolo/">
                    <img src={linkedin} alt="Linkedin"/><span class="tooltiptext">isabelle-toniolo</span>
                    </a>
                    <a class="tooltip" target="_blank" rel="noopener noreferrer" href="mailto:isabelletoniolom@gmail.com">
                        <img src={gmail} alt="Gmail"/><span class="tooltiptext">isabelletoniolom@gmail.com</span>
                    </a>
                    <a class="tooltip" target="_blank" rel="noopener noreferrer" href="https://github.com/isatxx">
                        <img src={github} alt="Github"/><span class="tooltiptext">isatxx</span>
                    </a>
                    <a class="tooltip" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tonioloisabelle/">
                        <img src={instagram} alt="Instagram"/><span class="tooltiptext">tonioloisabelle</span>
                    </a>
                </div>
            </div>

            <div class="home-pfp">

            </div>

        </main>
    )
}