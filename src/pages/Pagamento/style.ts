import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* TERMOS E CONDIÇÕES */
    #termos_condicoes {
        resize: none;
    }
    #termos_condicoes_check_label {
        color: #6C757D;
    }
    .anima_termos_condicoes {
        animation: anim_check_termos 1s linear alternate forwards;
    }

    /* ANIMAÇÕES */
    @keyframes anim_check_termos {
        0% {
            color: #6C757D;
        }
        25% {
            color: #1A9CD5;
        }
        100% {
            color: black;
        }
    }


    /* LISTA DE PRODUTOS */
    .input_icon_custom > .input-group {
        border: 2px solid #40AEBF;
        border-radius: 6px;
    }
    .input_icon_custom .input-group-text {
        border: none;
        background-color: white;
    }
    .input_icon_custom .form-control {
        height: 48px;
        border: none;
        padding-left: 0;
        font-family: Poppins;
        font-size: 18px;
        line-height: 20px;
        color: #323232;
    }
    .input_icon_custom .form-control::placeholder {
        color: #A3A3A3;
    }
    .input_icon_custom .form-control:focus {
        box-shadow: none;
    }


    /* RESUMO */
    table td {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    table tr td {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        text-transform: uppercase;
        color: #646464;
    }
    table tr td:last-child {
        font-size: 24px;
        color: #EF5FA3;
    }
    table tr:last-child td:last-child {
        font-size: 30px;
        line-height: 38px;
    }


    /* RESUMO */
    .card_resumo img {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .card_resumo_titulo {
        font-weight: bold;
        font-size: 20px;
        color: #40AEBF;
        margin-bottom: 1.2rem;
    }
    .card_resumo_qtd {
        font-size: 14px;
        color: #646464;
        margin-bottom: 1.2rem;
    }
    .card_resumo_total {
        font-size: 18px;
        text-transform: uppercase;
        color: #323232;
        margin-bottom: 1.2rem;
    }


    /* MEDIA QUERY */
    @media screen and (min-width: 000px) {}
    @media screen and (min-width: 576px) {}
    @media screen and (min-width: 768px) {}
    @media screen and (min-width: 992px) {}
`;