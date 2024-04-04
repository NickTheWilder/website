const particlesConfig = {
    background: {
        color: {
            value: "#1f2833",
        },
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
    fullScreen: {
        zIndex: 1,
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
        },
    },
    particles: {
        color: {
            value: "#8F9399",
        },
        links: {
            color: {
                value: "#8F9399",
            },
            distance: 150,
            enable: true,
            warp: true,
        },
        move: {
            attract: {
                rotate: {
                    x: 600,
                    y: 1200,
                },
            },
            enable: true,
            path: {},
            outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
            },
            speed: 1.5,
            spin: {},
            warp: true,
        },
        number: {
            density: {
                enable: true,
            },
            value: 75,
        },
        opacity: {
            value: 0.5,
            animation: {
                speed: 3,
                minimumValue: 0.1,
            },
        },
        size: {
            random: {
                enable: true,
            },
            value: {
                min: 1,
                max: 3,
            },
            animation: {
                speed: 20,
                minimumValue: 0.1,
            },
        },
    },
};

export default particlesConfig;
