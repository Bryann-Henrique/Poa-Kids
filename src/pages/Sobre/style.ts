import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .sub_page_titulo {
        font-weight: bold;
        color: #40AEBF;
        font-size: 45px;
        line-height: 50px;
    }


    /* SEÇÃO 1 */
    .secao_1 {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }

    #circle_fly {
        position: absolute;
        left: -100px;
        top: 20%;
        z-index: -1;
    }


    /* SEÇÃO 2 */
    .secao_2 {
        font-weight: bold;
        font-size: 34px;
        line-height: 40px;
        display: flex;
        align-items: center;
        color: #DD3C88;
    }
    .secao_2 img {
        border-radius: 14px;
    }

    /* SEÇÃO 3 */
    .secao_3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #323232;
    }
    .secao_3 img {
        border-radius: 50%;
        box-shadow: 5px 5px 0px #FFB3D7;
    }
    .secao_3 h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #DD3C88;
    }

    /* CONTEÚDO */
    .contato_link {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        text-transform: uppercase;
        border-left: 3px solid #DD3C88;
    }
    .contato_link_email {
        word-break: break-all;
        color: #1A9CD5;
        transition: .4s;
    }
    .contato_link_insta {
        color: #DD3C88;
        transition: .4s;
    }
    .contato_link_email:hover {
        text-decoration: none;
        color: #1A9CD5;
    }
    .contato_link_insta:hover {
        text-decoration: none;
        color: #BC3867;
    }


    /* MEDIA QUERY */
    @media screen and (min-width: 000px) {}
    @media screen and (min-width: 576px) {
        .secao_2 {
            font-size: 40px;
            line-height: 50px;
        }
        .secao_2 img {
            width: 200px;
        }
    }
    @media screen and (min-width: 768px) {
        .sub_page_titulo {
            font-size: 65px;
            line-height: 70px;
        }

        .secao_2 {
            font-size: 60px;
            line-height: 70px;
        }
        .secao_2 img {
            width: 200px;
        }
    }
    @media screen and (min-width: 992px) {}
`;