import Particles from "react-tsparticles";
import particlesConfig from "./particles-config.js";
import { loadFull } from "tsparticles";

import "./styles/SplashScreen.css";

function SplashScreen() {
    const particlesInit = async (main) => {
        await loadFull(main, particlesConfig);
    };

    const scrollToContent = () => {
        window.scrollTo({
            top: document.getElementById("content").offsetTop,
            behavior: "smooth",
        });
    }

    return (
        <section id="main">
            <Particles
                init={particlesInit}
                options={particlesConfig}
            />
            <div className="shell">
                <div className="container">
                    <div className="name">Nick Wilder&nbsp;</div>
                </div>
                <div className="btn-container">
                    <a class="btn" href="https://github.com/NickTheWilder">
                        <img
                            src={require("../img/github.png")}
                            alt="GithHub Logo"
                        />
                        GitHub
                    </a>
                    <a
                        class="btn"
                        href="https://www.linkedin.com/in/nick-wilder/"
                    >
                        <img
                            src={require("../img/linkedin.png")}
                            alt="LinkedIn Logo"
                        />
                        LinkedIn
                    </a>
                </div>
                <div className="view-more" onClick={scrollToContent}>
                    View More&nbsp;&nbsp;
                    <div className="scroll">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SplashScreen;