import Award from "../../img/recomendado.png"
import "./about.css"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://media.licdn.com/dms/image/C4E12AQFLMKahx0GSAQ/article-cover_image-shrink_720_1280/0/1555677967279?e=2147483647&v=beta&t=uwUTkkDW7J0ORowXMeLdPrs9YCVrcz9gnQSFVUdP18g" alt=""
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1>O Papel Crucial do DevOps nas Equipes</h1>
                <h2>Integração e Eficiência na Automação de Processos</h2>
                <p class="a-desc">
                    O DevOps desempenha um papel fundamental nas equipes de tecnologia, promovendo a integração entre as áreas de desenvolvimento e operações. Ao adotar práticas de automação e colaboração contínua, o DevOps facilita o lançamento mais rápido de novos recursos e a resolução ágil de problemas. A integração de processos, infraestrutura e ferramentas é essencial para melhorar a qualidade do software e garantir que os sistemas sejam escaláveis e seguros, atendendo às necessidades do negócio de maneira eficiente.
                </p>

                <div className="a-award">
                    <div className="a-right">
                        <img src={Award} alt="" className="a-award-img" />
                        <div className="a-award-texts">
                            <p className="a-award-desc">
                                Webdesign é o processo de criar sites, combinando estética,
                                funcionalidade e experiência do usuário. Ele envolve o uso de layouts, cores e
                                tipografia para tornar o site visualmente atraente e fácil de navegar,
                                garantindo que ele seja acessível e responsivo em diferentes dispositivos.
                            </p>

                        </div>

                        <div className="a-about-me">
                            <h2>Sobre Mim</h2>
                            <p className="a-about-desc">
                                Olá! Sou um desenvolvedor apaixonado por criar soluções eficientes e inovadoras. Tenho experiência em diversas tecnologias, incluindo DevOps, Front-end e Full Stack, com foco em melhorar a performance e a colaboração dentro das equipes. Sempre em busca de novos desafios, me dedico ao aprendizado contínuo e a aplicação de boas práticas no desenvolvimento de software.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About