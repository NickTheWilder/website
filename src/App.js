import "./App.css";
import Particles from "react-tsparticles";
import particlesConfig from "./components/particles-config.js";
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = async (main) => {
        await loadFull(main, particlesConfig);
    };

    const particlesLoaded = (main) => {
        console.log(main);
    };

    return (
        <div className="App">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
            />
            <div className="shell">
                <div className="name">Nick Wilder</div>
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
                    <a class="btn">
                        <img
                            src={require("./img/linkedin.png")}
                            alt="GithHub Logo"
                        />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
