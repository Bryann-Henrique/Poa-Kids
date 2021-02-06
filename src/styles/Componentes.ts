import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    /* SWITCHER */
    .switcher {
        display: flex;
        border: 2px solid #40AEBF;
        border-radius: 8px;
        min-width: 300px;
        width: 100%;
    }

    .switcher_bt {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 50%;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        color: #646464;
        cursor: pointer;
    }

    .switcher_active {
        background: #40AEBF;
        box-shadow: 0 0 0px 1px #40aebf;
        border-radius: 5px;
        color: white;
        transition: .4s;
    }


    /* CONTROLES */
    .btn_principal, .btn_secundario {
        width: 100%;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 15px;
        transition: .4s;
    }
    .btn_principal {
        color: white;
        background: #EF5FA3;
    }
    .btn_secundario {
        color: #EF5FA3;
        background: #FFE2F0;
    }
    .btn_principal:hover {
        background: #DD3C88;
    }
    .btn_secundario:hover {
        border: 1px solid #EF5FA3;
    }

    .buttom_custom {
        background: #40AEBF;
        color: #FFFFFF;
        font-family: Montserrat;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-transform: uppercase;
        height: 48px;
        border-radius: 6px;
        transition: .4s;
    }
    .buttom_custom:focus {
        background: #40AEBF;
        opacity: .8;
        color: #FFFFFF;
    }
    .buttom_custom:hover {
        opacity: .9;
    }
    .input_custom, .select_custom {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 14px;
        line-height: 29px;
        color: #323232;
        height: 48px;
        border: 2px solid #40AEBF;
    }
    .input_custom::placeholder, .select_custom::placeholder {
        font-weight: normal;
        color: #646464;
    }
    .buttom_custom:focus, .input_custom:focus, .select_custom:focus {
        box-shadow: none;
        border: 2px solid #40AEBF;

    }


    /* CARD DE DESTAQUES */
    .passeios_scroll {
        overflow-x: scroll;
    }
    .card_list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .card_peca, .card_destaq {
        text-align: center;
        background: #FFE8F3;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-bottom: 20px;
    }
    .card_peca > a:hover, .card_destaq > a:hover {
        text-decoration: none;
    }
    i.card_peca {
        background: transparent;
        box-shadow: none;
        border-radius: 0;
    }
    .card_img {
        min-height: 100px;
        border-radius: 10px;
        background-image: url('https://dummyimage.com/400x300.png/09f/fff');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .card_conteudo {
        padding: 10px;
    }
    .card_titulo {
        color: #323232;
        font-size: 14px;
        line-height: 16px;
    }
    .card_cores {
        display: flex;
        justify-content: center;
    }
    .card_cores > div {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .card_cores > div:last-child {
        margin-right: 0;
    }
    .card_valor {
        color: #DD3C88;
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        text-transform: uppercase;
    }
    .card_botao > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: #DD3C88;
        border-radius: 0px 0px 10px 10px;
        border: 0;
        outline: 0;

        color: #FFFFFF !important;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        transition: .4s;
    }
    .card_botao > a:hover {
        background-color: #EF5FA3;
        text-decoration: none;
    }


    /* MEDIA QUERY */
    @media screen and (max-width: 767px) {
        .btn_saiba_mais {
            display: block;
        }

        .btn_reserva {
            display: block;
        }
    }

    @media screen and (max-width: 500px) {
        .control_switcher {
            flex-direction: column;
            border: 2px solid #1A9CD5;
            border-radius: 20px;
        }

        .control_switcher > span {
            width: 90%;
            min-height: 2px !important;
            max-height: 2px !important;
        }

        .control_switcher_opt:first-child {
            border-radius: 20px 20px 0 0;
        }

        .control_switcher_opt:last-child {
            border-radius: 0 0 20px 20px;
        }
    }


    /* MEDIA QUERY */
    @media screen and (min-width: 0px) {
        .card_peca {
            width: 48%;
        }

        .card_destaq {
            min-width: 170px;
            margin-right: 20px;
        }

        .card_img {
            min-height: 120px;
        }
    }

    @media screen and (min-width: 576px) {
    }

    @media screen and (min-width: 768px) {
        .card_peca {
            width: 32%;
        }

        .card_destaq {
            min-width: 200px;
        }

        .card_img {
            min-height: 160px;
        }
    }

    @media screen and (min-width: 992px) {
        .card_peca {
            width: 22%;
            margin-bottom: 20px;
        }

        .card_img {
            min-height: 180px;
        }
    }

`;