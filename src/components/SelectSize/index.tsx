import React from 'react';

import { Container } from './style';

interface SelectSizeProps {
    val: number,
}

const SelectSize: React.FC<SelectSizeProps> = ({val}) => {
    return (
        <Container>
            <input type="radio" name="size" value={val} />
            <span>{val}</span>
        </Container>
    );
}

export default SelectSize;