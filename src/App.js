import "./App.css";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config.js";
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = async (main) => {
        await loadFull(main, particlesConfig);
    };

    return (
        <div className="app">
            <Particles init={particlesInit} options={particlesConfig} />
            <div className="shell">
                <div className="container">
                    <div className="name">Nick Wilder&nbsp;</div>
                </div>
                <div className="btn-container">
                    <a class="btn" href="https://github.com/NickTheWilder">
                        <img
                            src={require("./img/github.png")}
                            alt="GithHub Logo"
                        />
                        GitHub
                    </a>
                    <a
                        class="btn"
                        href="https://www.linkedin.com/in/nick-wilder/"
                    >
                        <img
                            src={require("./img/linkedin.png")}
                            alt="LinkedIn Logo"
                        />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
