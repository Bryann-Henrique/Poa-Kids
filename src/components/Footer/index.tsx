import React from 'react';
import { FiInstagram, FiFacebook } from "react-icons/fi";

import Logo from '../../assets/img/logomarca.png';

import './style.css';

const Footer: React.FC = () => {

    return (
        <footer id="rodape" className="mt-5">
            <div id="rodape_logo" className="mb-2">
                <img className="img-fluid" src={Logo} alt="Logo Poá Kids" />
            </div>

            <div id="rodape_info" className="container py-4 text-center">
                <div className="mb-2">
                    <a href="https://www.instagram.com/usepoakids/" className="mr-1" target="_blank" rel="noreferrer">
                        <FiInstagram size={30} color="#fff" />
                    </a>

                    <a href="none" target="_blank" rel="noreferrer">
                        <FiFacebook size={30} color="#fff" />
                    </a>
                </div>

                <p>2021 © POÁ KIDS. Todos os direitos reservados.</p>
                <p><strong>Swarm Digital</strong> tecnologia sob medida, performance e resultados.</p>
            </div>
        </footer>
    );
}

export default Footer;