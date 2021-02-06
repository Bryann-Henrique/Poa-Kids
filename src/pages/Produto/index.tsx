import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import SelectColor from "../../components/SelectColor";
import SelectSize from "../../components/SelectSize";
import Contador from "../../components/Contador";

import './style.css';

const Produto: React.FC = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        adaptiveHeight: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 500,
        speed: 1000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    };

    const [estoque, setEstoque] = useState(10);
    const [quantidade, setQuantidade] = useState(0);
    const [total, setTotal] = useState(0);

    const Somar = useCallback(() => {
        if (estoque > 0) {
            const nova_quantidade = quantidade + 1;
            setEstoque(estoque - 1);
            setQuantidade(nova_quantidade);
            setTotal(nova_quantidade * 10);
        }
    }, [quantidade, estoque]);

    const Subtrair = useCallback(() => {
        if (quantidade > 0) {
            const nova_quantidade = quantidade - 1;
            setEstoque(estoque + 1);
            setQuantidade(nova_quantidade);
            setTotal(nova_quantidade * 10);
        }
    }, [quantidade, estoque]);

    return (
        <>
            <div className="d-lg-flex container-lg px-0 mt-lg-5">
                {/* CARROCEL */}
                <div className="container align-self-lg-start divide_tela mb-3">
                    <Slider {...settings}>
                        <div className="slider_box_img">
                            <img src="https://dummyimage.com/400x4:3.png/09f/fff" alt="Slider img" />
                        </div>
                        <div className="slider_box_img">
                            <img src="https://dummyimage.com/400x4:3.png/09f/fff" alt="Slider img" />
                        </div>
                        <div className="slider_box_img">
                            <img src="https://dummyimage.com/400x4:3.png/09f/fff" alt="Slider img" />
                        </div>
                        <div className="slider_box_img">
                            <img src="https://dummyimage.com/400x4:3.png/09f/fff" alt="Slider img" />
                        </div>
                    </Slider>
                </div>

                {/* OPÇÕES  */}
                <form method="get" action="none" id="form_opcoes" className="divide_tela container px-lg-4">
                    <div className="mb-4">
                        <h1 className="titulo">TÍTULO DA PEÇA</h1>
                    </div>

                    <div className="opcoes_cor mb-3">
                        <h2 className="opcoes_titulo">COR</h2>
                        <div>
                            {["#EF5FA3", "#40AEBF", "#FABC19", "#7CD950"].map( (value, index) => <SelectColor color={value} val={index} key={index} /> )}
                        </div>
                    </div>

                    <div className="opcoes_tamanho mb-4">
                        <h2 className="opcoes_titulo">TAMANHO</h2>
                        <div>
                            {[1,2,4,6,8,12,14,16].map( (value, index) => <SelectSize val={value} key={index} />)}
                        </div>
                    </div>
                    
                    <div className="opcoes_qtd mb-5">
                        <h2 className="opcoes_titulo">
                            QUANTIDADE <span id="qtd_estoque">({estoque} DISPONÍVEIS)</span>
                        </h2>

                        <div className="d-flex align-items-center flex-wrap">
                            <Contador onSomar={Somar} onSubtrair={Subtrair} quantidade={quantidade} className="mr-2" />
                            <div id="opcoes_qtd_total" data-valor-unitario="10">
                                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 } )}
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 mb-lg-0">
                        <div className="d-flex flex-column flex-md-row">
                            <Link to="/carrinho" className="btn_principal col-12 col-md-6 mb-2 mb-md-0 mr-md-2">COMPRAR AGORA</Link>
                            {/* <button className="btn_principal col-12 col-md-6 mb-2 mb-md-0 mr-md-2" type="submit">COMPRAR AGORA</button> */}
                            <button className="btn_secundario col-12 col-md-6" type="button">ADD AO CARRINHO</button>
                        </div>

                        <div className="fora_estoque d-none">
                            PRODUTO ESGOTADO
                        </div>
                    </div>
                </form>
            </div>

            {/* OPÇÕES  */}
            <div className="container">
                <div className="opcoes_descricao mb-3">
                    <h2 className="opcoes_titulo">DESCRIÇÃO</h2>

                    <div id="descricao_texto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit et ante nunc aliquam diam. Vitae condimentum proin nam enim pellentesque felis nulla suspendisse bibendum. Mi ut aliquet ipsum at auctor. Viverra et.
                        </p>

                        <p>
                            Scelerisque volutpat et ut adipiscing sit in. In in tortor, sit vestibulum, elementum. Et vitae fermentum lacus, amet, sit est vitae diam maecenas. Libero eget diam aliquam porttitor egestas vel vitae. Etiam blandit est.
                        </p>
                    </div>
                </div>
            </div>

            {/* PEÇAS RELACIONADAS */}
            <div id="pecas" className="mt-5 position-relative">
                <div className="container mb-3">
                    <hr />
                    <h2 className="titulo_secao">Relacionados</h2>
                </div>

                <div className="card_list container-sm">
                    {[...Array(7)].map( (value, index) => (
                        <div className="card_peca" key={index}>
                            <Link to="/produto">
                                <div className="card_img"></div>
                                <div className="card_conteudo">
                                    <h3 className="card_titulo">TITULO DA PEÇA</h3>
                                    <div className="card_cores mb-2">
                                        <div style={{ background: "#EF5FA3" }}></div>
                                        <div style={{ background: "#56C7D9" }}></div>
                                        <div style={{ background: "#E9BD90" }}></div>
                                    </div>
                                    <div className="card_valor">
                                        R$ 99,99
                                    </div>
                                </div>
                            </Link>

                            <div className="card_botao">
                                <Link to="/produto">ADD AO CARRINHO</Link>
                            </div>
                        </div>
                    ))}

                    <i className="card_peca" aria-hidden="true"></i>
                    <i className="card_peca" aria-hidden="true"></i>
                    <i className="card_peca" aria-hidden="true"></i>
                </div>
            </div>
        </>
    );
}

export default Produto;