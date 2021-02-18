import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import Style from './style';

const Home: React.FC = () => {
    const [showCart, setShowCart] = useState(false);
    const nodeRef = useRef(null)

    const isInViewport = (element: any) => {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    }

    const handleSeta = () => {
        let seta = document.querySelector('#ancora_seta');

        if (!isInViewport(seta)) {
            setTimeout(() => {
                document.querySelector('#passeios_seta')?.classList.add('esconde_seta');
            }, 2000);
        }
    }

    return (
        <>
            <Style />

            <div id="destaques" className="mt-5 position-relative container-sm">

                <div className="mb-5">
                    <button className='px-3 d-block' onClick={ () => setShowCart(!showCart) }>state: {showCart && '1'}</button>

                    <Transition nodeRef={nodeRef} in={showCart} timeout={500}>
                        {state => (
                            <div>teste</div>
                        )}
                    </Transition>

                </div>

                <div className="mb-3">
                    <h2 className="titulo_secao">Destaques da semana</h2>
                </div>
            
                <div id="passeios_seta">
                    <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9L28 9" stroke="#1A9CD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 2L28 9L21 16" stroke="#1A9CD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            
                <div className="d-flex passeios_scroll pb-2" onScroll={handleSeta}>
                    {[...Array(8)].map( (value, index) => (
                        <div id="ancora_seta" className="card_destaq" key={index}>
                            <Link to="/produto">
                                <div className="card_img"></div>
                                <div className="card_conteudo">
                                    <h3 className="card_titulo">TITULO DA PEÇA</h3>
                                    <div className="card_cores mb-2">
                                        <div style={{background: "#EF5FA3"}}></div>
                                        <div style={{background: "#56C7D9"}}></div>
                                        <div style={{background: "#E9BD90"}}></div>
                                    </div>
                                    <div className="card_valor">
                                        R$ 99,99
                                    </div>
                                </div>
                            </Link>

                            <div className="card_botao">
                                <Link to="/produto">ADD AO CARRINHO</Link>
                            </div>
                        </div>
                    ))}

                    <div>&nbsp;</div>
                </div>
            </div>
            
            <div id="categorias" className="mt-5 position-relative">
                <div className="container mb-3">
                    <h2 className="titulo_secao">Categorias</h2>
                </div>
            
                <div className="container-sm d-flex flex-wrap">
                    {["vestidos", "camisas", "sapatos", "calças", "shorts", "roupas de banho"].map( (value, index) => 
                        <div className="categoria_item p-3" key={index} >
                            <a href="none">{value}</a>
                        </div>
                    )}
                </div>
            </div>
            
            <div id="pecas" className="mt-5 position-relative">
                <div className="container mb-3">
                    <h2 className="titulo_secao">Nossas peças</h2>
                </div>
            
                <div className="card_list container-sm">
                    {[...Array(7)].map( (value, index) => (
                        <div className="card_peca" key={index}>
                            <Link to="/produto">
                                <div className="card_img"></div>
                                <div className="card_conteudo">
                                    <h3 className="card_titulo">TITULO DA PEÇA</h3>
                                    <div className="card_cores mb-2">
                                        <div style={{background: "#EF5FA3"}}></div>
                                        <div style={{background: "#56C7D9"}}></div>
                                        <div style={{background: "#E9BD90"}}></div>
                                    </div>
                                    <div className="card_valor">
                                        R$ 99,99
                                    </div>
                                </div>
                            </Link>

                            <div className="card_botao">
                                <Link to="/produto">ADD AO CARRINHO</Link>
                            </div>
                        </div>
                    ))}

                    <i className="card_peca" aria-hidden="true"></i>
                    <i className="card_peca" aria-hidden="true"></i>
                    <i className="card_peca" aria-hidden="true"></i>
                </div>
            
            </div>

        </>
    );
}

export default Home;