import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: Montserrat, sans-serif;
    }
    body {
    }

    .titulo_secao {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
        color: #40AEBF;
    }
    .titulo_simples {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #646464;
    }
    .titulo_simples_2 {
        font-family: Montserrat;
        font-style: normal;
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