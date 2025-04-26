import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function AboutContent() {
    // Configuração do Carousel
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                },
            }
        ],
    };

    return (
        <main className="section-main">
            <div className="about-intro">
                <h1>Sobre mim</h1>
                <p>Sou de Minas Gerais, uma entusiasta de tecnologia, atualmente formada em Análise e Desenvolvimento de Sistemas, estou dedicada a aprender e crescer na área de desenvolvimento de software. Além do desenvolvimento de software, também tenho um interesse especial em UX Design, buscando entender como criar experiências digitais mais intuitivas e agradáveis para os usuários.</p>
                <p>Estou constantemente aprendendo e crescendo, buscando novas maneiras de aprimorar minhas habilidades e aplicá-las em projetos práticos.</p>
                <p>Fique à vontade para explorar meu portifólio e entrar em contato comigo!</p>
            </div>
            
            {/* Div para as Habilidades */}
            <div className="about-skills">
                <h1>Habilidades</h1>
                <Slider {...settings}>
                    {/* Cada slide será uma habilidade */}
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=html&perline=1&theme=light" alt="HTML" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=css&perline=1&theme=light" alt="CSS" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=js&perline=1&theme=light" alt="JavaScript" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=react&perline=1&theme=light" alt="React" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=python&perline=1&theme=light" alt="Python" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=nodejs&perline=1&theme=light" alt="Node.js" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=mysql&perline=1&theme=light" alt="MySQL" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=figma&perline=1&theme=light" alt="Figma" />
                    </div>
                    <div className="skill-item">
                        <img src="https://skillicons.dev/icons?i=git&perline=1&theme=light" alt="Git" />
                    </div>
                </Slider>
            </div>
        </main>
    );
}
