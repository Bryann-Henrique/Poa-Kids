import React, { useEffect, useState } from 'react';

import { Container } from './style';

interface ContadorProps {
    className?: string,
    target?: string,
}

//const Contador: React.FC<ContadorProps> = ({ className, ...props }) => {
const Contador = ({ target, ...props }: ContadorProps) => {
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

    useEffect(() => {
        if (!target) return;
        
        let elemCalc = document.getElementById(target);
        let qtd: number = Number(elemCalc!.dataset.valorUnitario) | 0;

        elemCalc!.innerText = (qtd * cont).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
    }, [cont, target]);

    return (
        <Container className={props.className}>
            <input className="control_number_sub" value="-" type="button" onClick={ControlNumber} />
            <input id="control_number_valor" className="control_number_valor" name="qtd" type="number" value={cont} min="0" max="99" />
            <input className="control_number_soma" value="+" type="button" onClick={ControlNumber} />
        </Container>
    )
}

export default Contador;