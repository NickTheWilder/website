import React, { useState, useEffect, useRef, useCallback } from "react";
import "./loading.module.css";

function Loading() {
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [chasingCirclePos, setChasingCirclePos] = useState({ x: -50, y: 0 });
    // eslint-disable-next-line no-unused-vars
    const [homeBase, setHomeBase] = useState({ x: -50, y: 0 });
    const [isCirclePaused, setIsCirclePaused] = useState(false);
    const progressRef = useRef();
    const circleRef = useRef();
    const hoverDelayRef = useRef(null);

    const updateProgress = useCallback(() => {
        setProgress((oldProgress) => {
            if (isHovered) {
                return oldProgress >= 100 ? 100 : oldProgress + 1;
            } else {
                return oldProgress <= 0 ? 0 : oldProgress - 2;
            }
        });
    }, [isHovered]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        if (isHovered) {
            document.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHovered]);

    useEffect(() => {
        clearInterval(progressRef.current);
        progressRef.current = setInterval(updateProgress, 100);
        return () => clearInterval(progressRef.current);
    }, [isHovered, updateProgress]);

    useEffect(() => {
        clearInterval(circleRef.current);
        if (
            isHovered ||
            chasingCirclePos.x !== homeBase.x ||
            chasingCirclePos.y !== homeBase.y
        ) {
            circleRef.current = setInterval(() => {
                setChasingCirclePos((prevPos) => {
                    if (isCirclePaused) {
                        return prevPos;
                    }

                    const targetPos = isHovered ? mousePos : homeBase;
                    const dx = targetPos.x - prevPos.x;
                    const dy = targetPos.y - prevPos.y;
                    const distance = Math.hypot(dx + dy);

                    if (isNaN(distance) || distance <= 1) {
                        setIsCirclePaused(true);
                        return prevPos;
                    } else {
                        setIsCirclePaused(false);
                        return {
                            x: prevPos.x + dx * 0.05,
                            y: prevPos.y + dy * 0.05,
                        };
                    }
                });
            }, 20);
        }

        return () => clearInterval(circleRef.current);
    }, [isHovered, mousePos, homeBase, chasingCirclePos, isCirclePaused]);

    return (
        <div className={isHovered ? "shell green" : "shell"}>
            <div
                className="target"
                onMouseEnter={() => {
                    clearTimeout(hoverDelayRef.current);
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    hoverDelayRef.current = setTimeout(() => {
                        setIsHovered(false);
                        setIsCirclePaused(false);
                    }, 500);
                }}
            >
                Aim here
            </div>
            <div
                className="chasingCircle"
                style={{
                    left: `${chasingCirclePos.x}px`,
                    top: `${chasingCirclePos.y}px`,
                }}
            />
            <div className="loadingBar" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default Loading;
