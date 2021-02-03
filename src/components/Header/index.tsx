import React from 'react';

import logo from '../../assets/img/logomarca.png';
import menu from '../../assets/img/icons/menu.svg';

const Header: React.FC = () => {
    return (

        <div className="">
            <nav id="menu" className="navbar p-0 fixed-top navbar-expand-lg navbar-light">
                <div className="container-lg">

                    <button id="menu_bt" className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#menu_opcoes" aria-controls="menu_opcoes" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={menu} alt="MENU" />
                    </button>

                    <a href="none" className="navbar-brand m-0">
                        <img src={logo} alt="logomarca top arraial" />
                    </a>

                    <div className="position-relative order-1 order-lg-2 d-flex align-items-center">
                        <a href="none" className="btn-pedido d-none d-lg-inline">MEUS PEDIDOS</a>

                        <a href="none" id="cart" className="d-inline-block">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 29.3334C12.7364 29.3334 13.3333 28.7364 13.3333 28C13.3333 27.2636 12.7364 26.6667 12 26.6667C11.2636 26.6667 10.6667 27.2636 10.6667 28C10.6667 28.7364 11.2636 29.3334 12 29.3334Z" stroke="#DD3C88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M26.6667 29.3334C27.4031 29.3334 28 28.7364 28 28C28 27.2636 27.4031 26.6667 26.6667 26.6667C25.9303 26.6667 25.3333 27.2636 25.3333 28C25.3333 28.7364 25.9303 29.3334 26.6667 29.3334Z" stroke="#DD3C88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.33334 1.33331H6.66668L10.24 19.1866C10.3619 19.8005 10.6959 20.3519 11.1834 20.7444C11.6709 21.1368 12.2809 21.3453 12.9067 21.3333H25.8667C26.4924 21.3453 27.1024 21.1368 27.5899 20.7444C28.0775 20.3519 28.4114 19.8005 28.5333 19.1866L30.6667 7.99998H8.00001" stroke="#DD3C88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span id="cart_qtd">0</span>
                        </a>
                    </div>

                    <div id="menu_opcoes" className="menu_opcoes collapse navbar-collapse order-3 order-lg-1">
                        <ul className="navbar-nav w-100 justify-content-center align-items-center pt-4 pt-lg-0">
                            <li className="nav-item text-center active">
                                <a href="none" className="nav-link">HOME</a>
                            </li>

                            <li className="nav-item text-center">
                                <a href="none" className="nav-link">SOBRE NÓS</a>
                            </li>

                            <li className="nav-item text-center">
                                <a href="none" className="nav-link">DÚVIDAS</a>
                            </li>

                            <li className="nav-item text-center">
                                <a href="none" className="nav-link">CONTATO</a>
                            </li>

                            <li className="nav-item text-center d-lg-none mt-4 mb-3">
                                <span>
                                    <a href="none" className="btn-pedido">MEUS PEDIDOS</a>
                                </span>
                            </li>
                        </ul>

                        <div className="d-block d-lg-none pb-2"></div>
                    </div>

                </div>
            </nav>

            <div id="header_space">&nbsp; aaa</div>
        </div>

    );
}

export default Header;