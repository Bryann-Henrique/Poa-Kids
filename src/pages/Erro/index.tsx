import React from 'react';
import { Link } from 'react-router-dom';

const Erro: React.FC = () => {
    return (
        <div className="container text-center">
            <div style={{margin: '25vh 0', }}>
                <h1>PÁGINA NÃO ENCONTRADA</h1>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    );
}

export default Erro;