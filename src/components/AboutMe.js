import "./styles/AboutMe.css";

function AboutMe() {
    return (
        <section id="content">
            <div className="nav">
                <div
                    className="active nav-btn"
                    id="about"
                    onClick={changeSection}
                >
                    About Me
                </div>
                <div className="nav-btn" id="skills" onClick={changeSection}>
                    Skills
                </div>
                <div className="nav-btn" id="projects" onClick={changeSection}>
                    Projects
                </div>
                <div className="nav-btn" id="blog" onClick={changeSection}>
                    Blog
                </div>
            </div>
            <div className="sec" id="about-sec">
                <div className="about-me">
                    <div className="oneofthree">
                        <img
                            className="profile-pic"
                            src={require("../img/nick-wilder.jpg")}
                            alt="Nick Wilder"
                        />
                        <i className="image-label">
                            Picture of me and my fiance
                        </i>
                    </div>
                    <div className="twoofthree">
                        <h1>About Me</h1>
                        <p>
                            Hello! My name is Nick Wilder and I'm a software
                            developer based out of Houston, TX. I'm currently
                            working as a software engineer at Pandell. I have a
                            bachelors degree in Computer Science from Text
                            A&amp;M University - Corpus Christi. I have a
                            passion for programming and I'm currently perfecting my skills React.js and TypeScript.
                        </p>
                        <p>
                            Previously I worked at Church Unlimited in Corpus
                            Christ, TX. I was a Full Stack Developer helping
                            support all web and mobile applications provided by
                            the Church. We frequently saw web traffic of over
                            20,000 visitors monthly and upwards of 7,000 active
                            viewers at our peak times on our online streaming
                            platform. My role was to creat scripts and programs
                            used by all staff and better assist volunteers
                            through additions to our live platform enabling them
                            provide a positive and positive experience to the
                            community.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sec" id="skills-sec">
                <div className="skills">
                    <div className="oneofthree">
                        <img
                            class="skills-img"
                            src={require("../img/icon_soft_skills.png")}
                            alt="Soft skills"
                        />
                        <div className="skills-title">Soft Skills</div>
                        <p class="skills-item">
                            Leadership, Teamwork, Communication, Time
                            Management, Fast Learner
                        </p>
                    </div>
                    <div className="oneofthree">
                        <img
                            class="skills-img"
                            src={require("../img/icon_languages.png")}
                            alt="Languages"
                        />
                        <div className="skills-title">Languages</div>
                        <p class="skills-item">
                            Focus: HTML5, CSS, JavaScript, TypeScript,
                            JSON <br />
                            Prior Experience: C++, Java, Python, C, C#
                            .NET, SQL, XML, PHP
                        </p>
                    </div>
                    <div className="oneofthree">
                        <img
                            class="skills-img"
                            src={require("../img/icon_framework.png")}
                            alt="Frameworks and APIs"
                        />
                        <div className="skills-title">
                            Framework, APIs, Tools
                        </div>
                        <p class="skills-item">
                            React.js, Node.js, Firebase, Git, OOP, HTTP, MSAL,
                            Microsoft Graph, Node.JS
                        </p>
                    </div>
                </div>
            </div>
            <div className="sec" id="projects-sec">
                <h1>Projects</h1>
                Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                Euismod quis viverra nibh cras. Iaculis at erat pellentesque
                adipiscing commodo elit. Sodales ut eu sem integer vitae. At
                tellus at urna condimentum mattis pellentesque id. Posuere urna
                nec tincidunt praesent. Rutrum quisque non tellus orci ac. Magna
                fringilla urna porttitor rhoncus dolor purus non enim.
            </div>
            <div className="sec" id="blog-sec">
                <h1>Blog</h1>
                Pretium vulputate sapien nec sagittis aliquam malesuada bibendum
                arcu. Ultricies lacus sed turpis tincidunt id. Est placerat in
                egestas erat imperdiet. Dolor sit amet consectetur adipiscing
                elit ut aliquam purus sit. In arcu cursus euismod quis. Nunc
                scelerisque viverra mauris in aliquam. Neque volutpat ac
                tincidunt vitae semper quis.
            </div>
        </section>
    );
}

export function changeSection(e) {
    const nav = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove("active");
    }
    e.target.classList.add("active");

    const secId = document.getElementById(`${e.target.id}-sec`);
    window.scrollTo({
        top: secId.offsetTop + secId.offsetHeight + 10,
        behavior: "smooth",
    });
}

export default AboutMe;
