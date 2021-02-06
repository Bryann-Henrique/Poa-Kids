import React from "react";
import { Link } from 'react-router-dom';

import './style.css';

const Home: React.FC = () => {

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
            {/* <div id="carrocel" className="container">
                <div id="slider_container">
                    <div id="prev">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="42" fill="white" />
                            <path d="M26.25 31.5L15.75 21L26.25 10.5" stroke="#646464" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
            
                    <div id="slider_box">
                        <div className="slider_custom">
                            <div className="slider_box_img">
                                <img src="https://dummyimage.com/400x300.png/09f/fff" alt="imagem carrocel" />
                            </div>
                            <div className="slider_box_img">
                                <img src="https://dummyimage.com/400x300.png/09f/fff" alt="imagem carrocel" />
                            </div>
                            <div className="slider_box_img">
                                <img src="https://dummyimage.com/400x300.png/09f/fff" alt="imagem carrocel" />
                            </div>
                            <div className="slider_box_img">
                                <img src="https://dummyimage.com/400x300.png/09f/fff" alt="imagem carrocel" />
                            </div>
                        </div>
                    </div>
            
                    <div id="next">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="42" fill="white" />
                            <path d="M15.75 31.5L26.25 21L15.75 10.5" stroke="#646464" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div> */}


            <div id="destaques" className="mt-5 position-relative container-sm">

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
                    {["vestidos", "camisas", "sapatos", "calças", "shorts", "roupas de banho"].map( (value, index) => {
                        return <div className="categoria_item p-3" key={index} ><a href="none">{value}</a></div>;
                    })}
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