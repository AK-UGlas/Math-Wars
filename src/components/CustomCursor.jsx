// custom cursor, inspired by Andriy Chemerynskiy:
// https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3

import './CustomCursor.css';
import React, { useState, useEffect } from 'react';

const Cursor = () => {

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
    }

    const onMouseMove = (event) => {
        setPosition({x: event.clientX, y: event.clientY});
    };


    return (
        <div className="custom-cursor"
            style={{
               left: `${position.x}px`,
               top: `${position.y}px`
            }}>
        </div>

    );
};

export default Cursor;