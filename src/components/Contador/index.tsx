import React from 'react';

import { Container } from './style';

interface ContadorProps {
  className?: string;
  quantidade?: number;
  onSomar(): void;
  onSubtrair(): void;
}

const Contador = ({ quantidade, onSubtrair, onSomar, ...props }: ContadorProps) => {
  return (
    <Container className={props.className}>
      <input onClick={onSubtrair} className="control_number_sub" value="-" type="button" />
      <input
        value={quantidade}
        name="qtd"
        type="number"
        min="0"
        max="99"
        className="control_number_valor"
      />
      <input onClick={onSomar} className="control_number_soma" value="+" type="button" />
    </Container>
  );
};

export default Contador;