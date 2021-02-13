import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style';

const Confirmacao: React.FC = () => {
    
    return (
        <>
            <Style />
            
            <div className="container">
                <div className="pb-5 d-flex flex-column justify-content-center pt-5" style={{height: '50vh'}}>
                    <div>
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"></span>
                                <span className="icon-line line-long"></span>
                                <div className="icon-circle"></div>
                                <div className="icon-fix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="conteudo_titulo mb-4">obrigado!</h2>
                        <p className="conteudo_texto">
                            veja todas as suas reservas <Link to="/pedido" className="conteudo_link">clicando aqui</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirmacao;