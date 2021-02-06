import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Contador from '../../components/Contador';

import './style.css';

const Carrinho: React.FC = () => {

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
        
        <form method="post" action="" className="container">

            <div className="my-5">
                <h1 className="titulo_simples">Carrinho</h1>
            </div>

            {/* PRODUTOS  */}
            <div>

                {[...Array(4)].map( (value, index) => (
                    <div className="card_produto position-relative d-block d-lg-flex align-items-center text-center text-lg-left py-5 py-lg-3 mb-4 mb-lg-0" key={index}>
                        <div className="mb-3 mb-lg-0 flex-grow-1">
                            <img className="img-fluid rounded" src="https://dummyimage.com/400x4:3.png/09f/fff" alt="Imagem" />
                        </div>

                        <div className="mb-3 mb-lg-0 flex-grow-1">
                            <h2 className="m-0">Lorem ipsum dolor sit</h2>
                        </div>

                        <div className="mb-3 mb-lg-0 flex-grow-1">
                            <Contador onSomar={Somar} onSubtrair={Subtrair} quantidade={quantidade} className="control_number mx-auto" />
                        </div>

                        <div className="card_produto_total flex-grow-1">
                            {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 } )}
                        </div>

                        <div className="card_produto_delete">
                            <button className="bt_produto_delete">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M17 1L1 17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 1L17 17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            <div className="d-lg-flex">
                {/* FRETE  */}
                <div id="frete" className="mt-5">
                    <div className="mb-3">
                        <h2 className="titulo_secao">Calcular frete</h2>
                    </div>

                    <div className="">
                        <select className="select_custom form-control mb-3">
                            <option>OPÇÃO 1</option>
                            <option>OPÇÃO 2</option>
                            <option>OPÇÃO 3</option>
                        </select>

                        <input className="input_custom form-control mb-3" type="text" placeholder="CEP" />

                        <input className="buttom_custom form-control" type="button" value="CALCULAR" />

                        <div className="info_valor mt-3">
                            VALOR DO FRETE: <strong id="frete_total">R$ 99,99</strong>
                        </div>
                    </div>
                </div>

                {/* CUPOM  */}
                <div id="cupom" className="mt-5 pl-lg-5">
                    <div className="mb-3">
                        <h2 className="titulo_secao">Cupom de desconto</h2>
                    </div>

                    <div className="resumo_detalhes d-flex flex-column" style={{borderBottom: 0}}>
                        <div className="cupom_btn_group p-1 d-flex align-items-center justify-content-between position-relative">
                            <div className="cupom_img"></div>
                            <input className="cupom_input pl-2" placeholder="INSIRA SEU CUPOM" maxLength={20} /> 
                            <button className="cupom_btn" type="button">
                                APLICAR
                            </button>
                        </div>

                        <div className="info_valor mt-3">
                            DESCONTO APLICADO: <strong id="desconto_total">-R$ 99,99</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* RESUMO  */}
            <div id="resumo" className="mt-5">
                <hr />
                <div className="mb-3 mt-5">
                    <h2 className="titulo_secao">Resumo</h2>
                </div>

                <div className="">
                    <table className="table table-borderless table-hover">
                        <tbody>
                            <tr>
                                <td>COMPRAS</td>
                                <td id="resumo_vlr_compras" className="text-right">R$ 99,99</td>
                            </tr>
                            <tr>
                                <td>FRETE</td>
                                <td id="resumo_vlr_frete" className="text-right">R$ 99,99</td>
                            </tr>
                            <tr>
                                <td>DESCONTO</td>
                                <td id="resumo_vlr_desconto" className="text-right">- R$ 99,99</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold" style={{lineHeight: '38px'}}>TOTAL</td>
                                <td id="resumo_vlr_total" className="font-weight-bold text-right">R$ 99,99</td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        {/* <button id="btn_prosseguir" className="btn_principal mb-2" type="submit">PROSSEGUIR</button> */}
                        <Link to="/pagamento" id="btn_prosseguir" className="btn_principal d-block mb-2">PROSSEGUIR</Link>
                    </div>
                </div>
            </div>

        </form>

    );
}

export default Carrinho;