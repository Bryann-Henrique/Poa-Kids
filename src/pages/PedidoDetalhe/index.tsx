import React from 'react';

import userIcon from '../../assets/img/icons/form/user.svg';
import idIcon from '../../assets/img/icons/form/id.svg';
import calendarIcon from '../../assets/img/icons/form/calendario.svg';
import mailIcon from '../../assets/img/icons/form/mail.svg';
import phoneIcon from '../../assets/img/icons/form/telefone.svg';

import Style from './style';
import { Link } from 'react-router-dom';

const PedidoDetalhe: React.FC = () => {
    return (
        <>
            <Style />

            <div className="container PEDIDO_FECHADO">
                <div className="my-5">
                    <h1 className="titulo_simples">SEUS DADOS</h1>
                </div>

                {/* RESUMO  */}
                <div id="resumo" className="mt-4">
                    <hr />

                    <div className="mb-2">
                        {[...Array(4)].map((value, index) => (
                            <div className="card_resumo d-flex align-items-center mb-3">
                                <div className="mr-3">
                                    <img className="img-fluid" src="https://dummyimage.com/100x100.png/09f/fff" alt="Imagem roupa" />
                                </div>
                                <div>
                                    <h3 className="card_resumo_titulo m-0">Titulo da peça</h3>
                                    <p className="card_resumo_qtd m-0">Quantidade - <span id="qtd">99</span></p>
                                    <p className="card_resumo_total m-0">R$ 99,99</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-1" style={{borderBottom: '1px solid #eee'}}>
                        <table className="table table-borderless table-hover">
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
                        </table>
                    </div>
                </div>

                {/* DADOS PESSOAIS  */}
                <div id="pessoal" className="mt-5">
                    <div className="mb-3">
                        <div className="d-flex flex-column flex-wrap flex-lg-row justify-content-between">
                            <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                                <div className="input-group">
                                    <input className="form-control pl-2" value="teste 123" placeholder="id do pedido" readOnly />
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                                <div className="input-group">
                                    <input className="form-control pl-2" value="teste 123" placeholder="data de criação do pedido" readOnly />
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                                <div className="input-group">
                                    <input className="form-control pl-2" value="teste 123" placeholder="status do pedido" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h2 className="titulo_simples_2">
                            SEUS DADOS
                        </h2>

                        <div className="d-flex flex-column flex-wrap flex-lg-row justify-content-between">
                            <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={userIcon} alt="User icon" />
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="nome completo" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={idIcon} alt="ID icon" />
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="CPF" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-2 p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={calendarIcon} alt="Calendar icon" />
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="nascimento" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={mailIcon} alt="Mail icon" />
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="e-mail" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={phoneIcon} alt="Phone icon" />
                                        </span>
                                    </div>
                                    <input className="form-control" placeholder="telefone" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="col-12 col-lg-2"></div>
                        </div>

                    </div>

                    <div className="mb-3">
                        <h2 className="titulo_simples_2">
                            ENREDEÇO DE RECEBIMENTO
                        </h2>

                        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between">

                            <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                                <div className="input-group">
                                    <input id="recebimento_cep" className="input_custom form-control pl-3" placeholder="CEP" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-6 p-0">
                                <div className="input-group">
                                    <input id="recebimento_logradouro" className="input_custom form-control pl-3" placeholder="logradouro" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-2 p-0">
                                <div className="input-group">
                                    <input className="input_custom form-control pl-3" placeholder="número" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                                <div className="input-group">
                                    <input id="recebimento_bairro" className="input_custom form-control pl-3" placeholder="bairro" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                                <div className="input-group">
                                    <input id="recebimento_cidade" className="input_custom form-control pl-3" placeholder="cidade" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="form-group col-12 col-lg-3 p-0">
                                <div id="recebimento_uf" className="input-group">
                                    <input className="input_custom form-control pl-3" placeholder="UF" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-6 p-0">
                                <div className="input-group">
                                    <input className="input_custom form-control pl-3" placeholder="complemento" readOnly />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* TERMOS E CONDIÇÕES  */}
                <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="titulo_simples_2">
                            TERMOS E CONDIÇÕES
                        </h2>

                        <span className="font-weight-bold pb-1" style={{color: 'red', fontSize: '12px'}}>Leia até o final</span>
                    </div>

                    <textarea id="termos_condicoes" className="form-control w-100" rows={10} spellCheck="false" value={`1. A entrada na cidade de Arraial do Cabo está restrita a apresentação do QR CODE que foi enviado para o número de telefone informado no ato da compra;

    2. No dia do passeio, apresente o voucher impresso ou salvo em seu dispositivo móvel no Local do Embarque no qual será realizado o Check-in; 

    3. Não esqueça de levar um documento oficial com foto;

    4. Caso não haja o comparecimento no horário estabelecido, o serviço será cancelado automaticamente;

    5. Qualquer cancelamento só será passível de ressarcimento se cancelado com 72 horas que antecedem a data do passeio, descontando as taxas de operação;

    6. Caso não haja comparecimento ao local combinado e agendado na data e horário marcado, não haverá ressarcimento do valor;

    7. O passageiro deverá chegar com no mínimo 60 minutos de antecedência ao local indicado. Isto ajudará na organização e orientação para que nossos automóveis saiam no horário agendado, garantindo a satisfação e qualidade do nosso passeio;

    8. No nosso passeio de buggy você encontrará:
        - Profissionais autorizados e treinados para uma direção defensiva;
        - Automóveis novos e revisados;
        - Roteiro e parada nos pontos mais paradisíacos de Arraial do Cabo;
        - Muita diversão com segurança, profissionalismo e qualidade.

    9. Orientamos o uso de roupas leves, roupas de banho, óculos escuros, protetor solar e boné/chapéu.

    10. Não está incluso no valor a taxa de embarque na marina dos pescadores e os passeios de barco em Arraial do Cabo, o valor de R$ 10 será paga no check-in;`} />
                </div>

                {/* RESUMO  */}
                <div className="mt-4 d-flex justify-content-end">
                    <Link to="/pedidopagamento" className="btn_principal mb-2 col-12 col-md-6 col-lg-4">CONFIRMAR PAGAMENTO</Link>
                    {/* <a id="btn_prosseguir" href="none" className="btn_principal mb-2 col-12 col-md-6 col-lg-4">CONFIRMAR PAGAMENTO</a> */}
                </div>

            </div>
        </>
    )
}

export default PedidoDetalhe;