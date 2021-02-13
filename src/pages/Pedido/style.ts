import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .sub_page_titulo {
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        color: #40AEBF;
    }


    /* FORMULÁRIO */
    #dados_cpf, #dados_email {
        height: 48px;
    }
    .form_label {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        text-transform: capitalize;
        color: #40AEBF;
    }
    .input-group-text, .form-control {
        border-radius: 0;
        border: 1px solid #40AEBF;
    }
    .input-group-text {
        background-color: #40AEBF;
        padding: 0.375rem 0.60rem;
    }
    .form_titulo_secao {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 18px !important;
        line-height: 22px;
        text-transform: uppercase;
        color: #000000;
    }
    .btn_consulta {
        width: 100%;

        background: #40AEBF;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 14px;
        line-height: 48px;
        text-align: center;

        border: 0;
    }

    /*  */
    .input_icon_custom > .input-group {
        border: 2px solid #40AEBF;
        border-radius: 8px;
    }
    .input_icon_custom .input-group-text {
        border: none;
        border-radius: 8px;
        background-color: white;
    }
    .input_icon_custom .form-control {
        height: 48px;
        border: none;
        border-radius: 8px;
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


    /* TABELA */
    th, td {
        text-align: center;
    }
    #tabela_pedidos tr {
        align-items: center;
        border: 2px solid #40AEBF;
    }
    #tabela_pedidos tbody tr:hover {
        background: #f1fbff;
    }
    #tabela_pedidos thead th {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        text-transform: capitalize;
        color: #000;
    }
    #tabela_pedidos thead td {
        font-size: 14px;
        line-height: 18px;
        text-transform: capitalize;
        color: #000;
    }
    #tabela_pedidos tbody {
        font-size: 14px;
        color: #000;
    }
    #tabela_pedidos tbody a path {
        transition: .4s;
    }
    #tabela_pedidos tbody a:hover path {
        fill: #40AEBF;
    }



    /* MEDIA QUERY */
    @media screen and (min-width: 768px) {
        .produtos_card {
            margin-right: 40px !important;
        }
    }
    @media screen and (max-width: 767px) {
        .sub_page_titulo {
            font-size: 45px;
            line-height: 50px;
        }
        .sub_page_titulo > span {
            font-size: 45px;
            line-height: 50px;
        }
    }
`;