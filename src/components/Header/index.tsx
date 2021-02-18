import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logomarca.png';
import menu from '../../assets/img/icons/menu.svg';

import './style.css';

const Header: React.FC = () => {
    return (
        <div>
            <nav id="menu" className="navbar p-0 fixed-top navbar-expand-lg navbar-light">
                <div className="container-lg" style={{background: 'white'}}>
                    <button id="menu_mobile_show" className="ml-2 d-lg-none" style={{border: 'none', backgroundColor: 'transparent'}} >
                        <img src={menu} alt="MENU" />
                    </button>

                    <Link to="/" className="navbar-brand m-0" >
                        <img src={logo} alt="logomarca top arraial" />
                    </Link>

                    {/* CARRINHO  */}
                    <div className="position-relative order-1 order-lg-2 d-flex align-items-center">
                        <Link to="/pedido" className="btn-pedido d-none d-lg-inline">MEUS PEDIDOS</Link>

                        <button id="cart" className="d-inline-block">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M12 29.3334C12.7364 29.3334 13.3333 28.7364 13.3333 28C13.3333 27.2636 12.7364 26.6667 12 26.6667C11.2636 26.6667 10.6667 27.2636 10.6667 28C10.6667 28.7364 11.2636 29.3334 12 29.3334Z" stroke="#DD3C88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.6667 29.3334C27.4031 29.3334 28 28.7364 28 28C28 27.2636 27.4031 26.6667 26.6667 26.6667C25.9303 26.6667 25.3333 27.2636 25.3333 28C25.3333 28.7364 25.9303 29.3334 26.6667 29.3334Z" stroke="#DD3C88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.33334 1.33331H6.66668L10.24 19.1866C10.3619 19.8005 10.6959 20.3519 11.1834 20.7444C11.6709 21.1368 12.2809 21.3453 12.9067 21.3333H25.8667C26.4924 21.3453 27.1024 21.1368 27.5899 20.7444C28.0775 20.3519 28.4114 19.8005 28.5333 19.1866L30.6667 7.99998H8.00001" stroke="#DD3C88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span id="cart_qtd">0</span>
                        </button>


                        <div className="carrinho_container p-3">
                            <div className="carrinho_triangulo d-none d-lg-block"></div>

                            <h3 className="carrinho_titulo">MEU CARRINHO</h3>

                            <div id="carrinho_conteudo">
                                {[...Array(3)].map((value, index) => (
                                    <div className="carrinho_item d-flex justify-content-between align-items-center mb-3" key={index}>
                                        <div className="d-flex align-items-center">
                                            <img className="rounded mr-2" src="https://dummyimage.com/60x60.png/09f/fff" alt="Imagem produto" />
                                            <div>
                                                <div className="carrinho_peca_titulo mb-1">Titulo da peça</div>
                                                <div>R$ 99,99</div>
                                            </div>
                                        </div>
                                        <div>x2</div>
                                    </div>
                                ))}
                            </div>

                            <div className="d-flex justify-content-between mb-3 font-weight-bold">
                                <div>TOTAL:</div>
                                <div id="carrinho_total">R$ 99,99</div>
                            </div>

                            <a href="none" className="btn_principal py-3 py-md-2" style={{color: 'white', fontSize: '1rem'}}>VER CARRINHO</a>
                        </div>

                    </div>

                    {/* DESKTOP  */}
                    <div id="menu_opcoes" className="menu_opcoes collapse navbar-collapse order-3 order-lg-1">
                        <ul className="navbar-nav w-100 justify-content-center align-items-center pt-4 pt-lg-0 d-lg-flex">
                            <li className="nav-item text-center active">
                                <Link to="/" className="nav-link">HOME</Link>
                            </li>

                            <li className="nav-item text-center">
                                <Link to="/pedido" className="nav-link">DÚVIDAS</Link>
                            </li>

                            <li className="nav-item text-center">
                                <Link to="/sobre" className="nav-link">SOBRE NÓS</Link>
                            </li>
                        </ul>
                    </div>

                    {/* MOBILE  */}
                    <div id="menu_mobile" className="d-lg-none">
                        <div id="menu_overlay">
                            <div id="menu_circ_ext" className="anim_1"></div>
                            <div id="menu_circ_int" className="anim_2"></div>

                            <div id="menu_content">
                                <div>
                                    <ul id="menu_mobile_list" className="list-unstyled">
                                        <li><Link to="/">HOME</Link></li>
                                        <li><Link to="/pedido">PEDIDOS</Link></li>
                                        <li><Link to="/sobre" className="nav-link">SOBRE NÓS</Link></li>
                                    </ul>
                                </div>

                                <div id="menu_mobile_contact">
                                    <a href="https://www.instagram.com/usepoakids/" target="_blank" rel="noopener noreferrer">
                                        <div className="mb-3 d-flex align-items-center">
                                            <svg className="mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.1667 1.66666H5.83342C3.53223 1.66666 1.66675 3.53214 1.66675 5.83332V14.1667C1.66675 16.4678 3.53223 18.3333 5.83342 18.3333H14.1667C16.4679 18.3333 18.3334 16.4678 18.3334 14.1667V5.83332C18.3334 3.53214 16.4679 1.66666 14.1667 1.66666Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.3333 9.47501C13.4361 10.1685 13.3176 10.8769 12.9947 11.4992C12.6718 12.1215 12.1609 12.6262 11.5346 12.9414C10.9083 13.2566 10.1986 13.3663 9.50641 13.255C8.81419 13.1436 8.17472 12.8167 7.67895 12.321C7.18318 11.8252 6.85636 11.1857 6.74497 10.4935C6.63359 9.8013 6.74331 9.09159 7.05852 8.46532C7.37374 7.83905 7.87841 7.32812 8.50074 7.00521C9.12307 6.68229 9.83138 6.56383 10.5249 6.66667C11.2324 6.77158 11.8873 7.10123 12.393 7.60693C12.8987 8.11263 13.2283 8.76757 13.3333 9.47501Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.5833 5.41666H14.5916" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            @@usepoakids
                                        </div>
                                    </a>

                                    <h2 className="m-0">ATENDIMENTO</h2>
                                    
                                    <p className="m-0">
                                        Segunda a sexta<br />
                                        13hrs às 17hrs
                                    </p>
                                </div>
                            </div>

                            <button id="menu_mobile_close">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 2L2 22" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 2L22 22" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div id="header_space">&nbsp;</div>
        </div>
    );
}

export default Header;