import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    #header_space {
        height: 100px;
    }

    /* MENU SUPERIOR */
    #menu {
        background-color: white;
        border-bottom: 1px solid #E0E0E0;
    }
    .navbar-brand img {
        height: 75px !important;
    }
    #menu_bt {
        border: none;
    }
    #menu_bt:focus {
        outline: none;
    }
    /* PEDIDOS */
    .btn-pedido {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 22px;
        letter-spacing: 1px;
        color: #EF5FA3;
        border: 2px solid #EF5FA3 !important;
        border-color: #56C7D9;
        border-radius: 50px;
        padding: 10px 20px;
        transition: .4s;
    }
    .btn-pedido:hover {
        text-decoration: none;
        color: #DD3C88;
        border: 2px solid #DD3C88 !important;
    }
    /* CARRINHO */
    #cart {
        position: relative;
        background: #DD3C88 !important;
        border-radius: 30px 0px 0px 30px !important;
        padding: 10px 15px;
        border: none;
        outline: none;
    }
    #cart svg {
        z-index: 2;
    }
    #cart path {
        stroke: white;
    }
    #cart_qtd {
        display: block;
        position: absolute;
        top: 50%;
        left: 55%;
        background-color: #56C7D9;
        border-radius: 50%;
        height: 17px;
        width: 17px;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        line-height: 18px;
        font-weight: bold;
        text-align: center;
        color: white;
    }
    /* OPÇÕES */
    .menu_opcoes > ul > li> a {
        font-family: 'Montserrat', sans-serif;
        color: #EF5FA3 !important;
        font-weight: bold;
        font-size: 22px;
        padding: 15px 0;
        letter-spacing: 1px;
    }
    .menu_opcoes a.nav-link:hover {
        color: #DD3C88 !important;
    }
    .btn_minhas_reservas {
        background-color: red;
    }
    
    /* MEDIA QUERY */
    @media screen and (min-width: 992px) {
        .btn-pedido {
            color: #56C7D9;
            font-size: 16px;
            border: none !important;
            border-color: none;
            padding: 0;
            margin-right: 10px;
        }

        .btn-pedido:hover {
            color: #DD3C88;
            border: none !important;
        }

        .menu_opcoes > ul > li > a {
            font-weight: bold;
            font-size: 16px;
            padding: 0;
            margin: 0 1em;
        }

        #cart {
            padding: 10px;
            background: transparent !important;
            border-radius: 10px !important;
        }

        #cart path {
            stroke: #DD3C88;
        }

        .slick-slide, .slick-slide img {
            max-height: 600px;
        }
    }
    @media screen and (max-width: 767px) {
        .navbar-brand > img {
            height: 60px;
        }
    }

    /* RODAPÉ */
    #rodape {
        position: relative;
        background-color: #DD3C88;
        min-height: 200px;
        color: white;
    }

    #rodape_logo {
        position: relative;
        top: -1px;
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 0px 60px;
        text-align: center;
        z-index: 999;
    }

    #rodape_logo > img {
        max-width: 150px;
        height: auto;
    }

    #rodape_info {
        background: radial-gradient(50% 50% at 50% 50%, #EF5FA3 0%, #DD3C88 100%);
        border-radius: 0px;
    }

    #rodape_info > p {
        font-size: 12px;
        line-height: 14px;
    }

    #rodape_info a:hover {
        text-decoration: none;
    }

    #rodape_info svg {
        transition: .4s;
    }

    #rodape_info svg:hover {
        transform: scale(1.4);
    }
`;