import React from 'react';

import { Container } from './style';

interface SelectColorProps {
    color: string,
    val: number,
}

const SelectColor: React.FC<SelectColorProps> = ({ color, val }) => {
    return (
        <Container>
            <input type="radio" name="color" value={val} />
            <span style={{ background: color }}></span>
        </Container>
    );
}

export default SelectColor;