import React, { useState } from 'react';

import { Container } from './style';

interface ContadorProps {
    className?: string,
    target?: string,
}

//const Contador: React.FC<ContadorProps> = ({ className, ...props }) => {
const Contador = (props: ContadorProps) => {
    const [cont, setCont] = useState(1);
    
    const ControlNumber = (event) => {
        let el = event.target;
    
        if (el.value === '-' && cont > 0) {
            setCont(cont-1);
        }
        else if (el.value === '+') {
            setCont(cont+1);
        }
    }

    const CalcTarget = (target: string) => {
        
    }

    return (
        <>
            <Container className="mr-2">
                <input className="control_number_sub" value="-" type="button" onClick={ControlNumber} />
                <input id="control_number_valor" className="control_number_valor" name="qtd" type="number" value={cont} min="0" max="99" />
                <input className="control_number_soma" value="+" type="button" onClick={ControlNumber} />
            </Container>
        </>
    )
}

export default Contador;