import "./styles/AboutMe.css";

function AboutMe() {
    return (
        <section id="content">
            <div className="nav">
                <div className="active">
                    About Me
                </div>
                <div>Skills</div>
                <div>Projects</div>
                <div>Blog</div>
            </div>
            <div className="sec" id="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="sec hidden" id="skills">
                Enim neque volutpat ac tincidunt vitae semper. Diam volutpat
                commodo sed egestas egestas fringilla phasellus faucibus. Sem
                fringilla ut morbi tincidunt augue interdum velit euismod in.
                Nullam vehicula ipsum a arcu cursus vitae congue. Id aliquet
                risus feugiat in ante metus dictum at. Consectetur adipiscing
                elit pellentesque habitant morbi tristique senectus et netus.
                Purus ut faucibus pulvinar elementum integer enim neque
                volutpat. Turpis massa sed elementum tempus egestas sed sed.
            </div>
            <div className="sec hidden" id="projects">
                Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                Euismod quis viverra nibh cras. Iaculis at erat pellentesque
                adipiscing commodo elit. Sodales ut eu sem integer vitae. At
                tellus at urna condimentum mattis pellentesque id. Posuere urna
                nec tincidunt praesent. Rutrum quisque non tellus orci ac. Magna
                fringilla urna porttitor rhoncus dolor purus non enim.
            </div>
            <div className="sec hidden" id="blog">
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

export default AboutMe;
