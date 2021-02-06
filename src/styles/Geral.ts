import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Montserrat, sans-serif;
    }
    body {
    }

    .titulo_secao {
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
        color: #40AEBF;
    }
    .titulo_simples {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #646464;
    }
    .titulo_simples_2 {
        font-weight: bold;
        font-size: 16px;
        line-height: 29px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #646464;
    }

    /* MENSAGEM DE ERRO */
    .erro_input {
        border: 1px solid #ff5868 !important;
    }
    .erro_msg {
        font-size: 14px;
        color: #ff5868;
    }

`;