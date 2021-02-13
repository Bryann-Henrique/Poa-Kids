import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* LISTA DE PRODUTOS */
    .card_produto {
        border: 1px solid #E2E2E2;
    }
    .card_produto img {
        max-width: 60%;
    }
    .card_produto h2 {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: #40AEBF;
    }
    .card_produto_delete {
        position: absolute;
        top: 20px;
        right: 20px;
        transition: .4s;
    }
    .card_produto_delete:hover path {
        stroke: #FF4747;
    }
    .bt_produto_delete{
        background-color: transparent;
        padding: .4rem;
        border: none;
    }
    .card_produto_total {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #DD3C88;
    }


    /* SEÇÃO DE COMPRA */
    .btn_comprar, .btn_add_carrinho {
        width: 100%;
        font-size: 18px;
        line-height: 22px;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 15px;
        transition: .4s;
    }
    .btn_comprar {
        color: white;
        background: #EF5FA3;
    }
    .btn_add_carrinho {
        color: #EF5FA3;
        background: #FFE2F0;
    }
    .btn_comprar:hover {
        background: #DD3C88;
    }
    .btn_add_carrinho:hover {
        border: 1px solid #EF5FA3;
    }


    /* FRETE */
    .info_valor {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #DD3C88;
    }
    .info_valor > strong {
        font-size: 24px;
        line-height: 28px;
    }

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

    /* CUPOM */
    .cupom_btn_group {
        background: #FFFFFF;
        border: 2px solid #40AEBF;
        border-radius: 6px;
    }
    .cupom_btn_group * {
        height: 36px;
        line-height: 36px;
    }
    .cupom_btn_group.cupom_success {
        border: 1px solid #4CAF50;
    }
    .cupom_btn_group.cupom_error {
        border: 1px solid #FF4747;
    }
    .cupom_btn_group .cupom_img {
        background-image: url(../../assets/img/icons/cupom.svg);
    }
    .cupom_btn_group.cupom_success .cupom_img {
        background-image: url(../../assets/img/icons/check-circle.svg);
    }
    .cupom_btn_group.cupom_error .cupom_img {
        background-image: url(../../assets/img/icons/x-circle.svg);
    }
    .cupom_img {
        width: 10%;
        min-width: 32px;
        max-width: 50px;
        height: 32px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .cupom_input {
        width: 60%;
        border: 0;
        color: #454545;
        font-size: 16px;
        font-weight: bold;
    }
    .cupom_input::placeholder {
        color: #AFAFAF;
        font-weight: normal;
    }
    .cupom_btn {
        max-width: 200px;
        width: 30%;

        font-size: 14px;
        font-weight: bold;
        line-height: 28px;
        text-align: center;
        border: 0;
        border-radius: 5px;
        background: #40AEBF;
        color: #FFFFFF;
        transition: .4s;
    }
    .cupom_btn:hover {
        background: #32b4ed;
    }
    .cupom_btn:focus, .cupom_input:focus {
        border: 0;
        outline: 0;
    }


    /* MEDIA QUERY */
    @media screen and (min-width: 0px) {}
    @media screen and (min-width: 576px) {}
    @media screen and (min-width: 768px) {
        .btn_comprar, .btn_add_carrinho {
            width: 49%;
        }
    }
    @media screen and (min-width: 992px) {
        #resumo, #cupom, #frete {
            width: 50%;
        }
        .card_produto {
            border: none;
            border-bottom: 1px solid #E2E2E2;
        }
        .card_produto_delete {
            position: relative;
            top: 0;
            right: 0;
        }
        .card_produto > div {
            max-width: 25%
        }
        .card_produto img {
            max-width: 100px;
        }
        .control_number {
            width: 110px;
        }
        .control_number > * {
            font-size: 18px;
            height: 35px;
            width: 35px;
        }

    }
`;