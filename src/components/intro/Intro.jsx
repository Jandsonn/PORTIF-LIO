import "./Intro.css";
import Me from "../../img/jand-3.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jandson Ferreira</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">IaC</div>
                            <div className="i-title-item">Containerization Technology</div>
                            <div className="i-title-item">K8s</div>
                            <div className="i-title-item">Technical Support</div>
                            <div className="i-title-item">Python</div>
                            <div className="i-title-item">Shell Script Automation</div>
                            <div className="i-title-item">NodeJS</div>
                            <div className="i-title-item">Linux/Windows</div>
                            <div className="i-title-item">AWS</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Desenvolvimento Web Moderno
                        Foco em criar experiências rápidas e
                        responsivas utilizando React.js para o
                        front-end e Node.js com Express.js para o
                        back-end, garantindo aplicações escaláveis. Priorizo performance,
                        acessibilidade e otimização de carregamento. Uso Docker
                        para containerização e CI/CD para automação,
                        entregando soluções eficientes e seguras com excelente experiência para o usuário.
                    </p>
                </div>
                {/*SVG IS HERE!*/}
                <svg className="i-scrool"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="100"
                    height="100"
                    fill="none"
                >
                    <rect
                        x="30"
                        y="20"
                        width="40"
                        height="60"
                        rx="20"
                        fill="#d3d3d3"
                        stroke="black"
                        stroke-width="2"
                    />
                    <rect
                        x="45"
                        y="40"
                        width="10"
                        height="15"
                        rx="5"
                        fill="black"
                    />
                    <line
                        x1="30"
                        y1="50"
                        x2="70"
                        y2="50"
                        stroke="black"
                        stroke-width="2"
                    />
                </svg>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="img2" />
            </div>
        </div>
    );
}

export default Intro;
