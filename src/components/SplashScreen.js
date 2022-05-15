import Particles from "react-tsparticles";
import particlesConfig from "./particles-config.js";
import { loadFull } from "tsparticles";

import "./styles/SplashScreen.css";

function SplashScreen() {
    const particlesInit = async (main) => {
        await loadFull(main, particlesConfig);
    };

    const particlesLoaded = (main) => {
        console.log(main);
    };

    return (
        <section className="main">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
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
                <div className="view-more">
                    View More <img src={require("../img/scroll-down.png")} alt="Scroll Down" />
                </div>
            </div>
        </section>
    );
}

export default SplashScreen;
