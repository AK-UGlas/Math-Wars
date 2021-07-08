import React from 'react';
import styled, { keyframes } from 'styled-components';

const popLetters = keyframes`
    
`;

const CurvedTitle = styled.g`
    animation: ${popLetters} 2s ease forwards;
    &:nth-child(2) {
        animation-delay: 0.5s;
    }
    &:nth-child(3) {
        animation-delay: 0.5s;
    }
    transform-origin: (50%, 50%);
    transform-box: fill-box;
    transform: translate(-575px, -1000px) scale(2.5);
`;

const Title = () => {

    const textStyle = {
        className: 'title-text',
        width: '500',
        fontSize: '50',
        fontFamily: '"Joti One", cursive',
        fill: 'rgb(255, 40, 40)',
        filter: 'url(#shadow)'
    };

    return (
        <CurvedTitle>
            <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text {...textStyle}>  
                <textPath xlinkHref="#curve">
                    ARITHMAGEDDON
                </textPath>
            </text>
        </CurvedTitle>
    );
};

export default Title;