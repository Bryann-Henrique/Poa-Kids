import React, { useState } from 'react';

import user from '../../assets/img/icons/form/user.svg';
import telefone from '../../assets/img/icons/form/telefone.svg';
import mail from '../../assets/img/icons/form/mail.svg';
import id from '../../assets/img/icons/form/id.svg';
import creditCard from '../../assets/img/icons/form/credit-card.svg';
import calendario from '../../assets/img/icons/form/calendario.svg';
import cadeado from '../../assets/img/icons/form/cadeado.svg';

import './style.css';

const Pagamento = () => {

    const [disabledCheck, setDisabledCheck] = useState(false)
    const [showFormFatura, setShowFormFatura] = useState(true)

    const LiberaCheck = (e) => {
        const target = e.target;
        ((target.clientHeight + target.scrollTop) >= target.scrollHeight) && setDisabledCheck(false);
    }

    return (
        <form action="" method="post" className="container">
            <div className="my-5">
                <h1 className="titulo_simples">SEUS DADOS</h1>
            </div>

            {/* DADOS PESSOAIS  */}
            <div id="pessoal" className="mt-5">
                <div className="mb-3">

                    <div className="d-flex flex-column flex-wrap flex-lg-row justify-content-between">
                        <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={user} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="nome completo" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={id} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="CPF" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-2 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={calendario} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="nascimento" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={mail} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="e-mail" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={telefone} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="telefone" />
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
                        DADOS DE PAGAMENTO
                    </h2>

                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between">

                        <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={user} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="titular do cartão" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={id} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="CPF do titular" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-2 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={calendario} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="nascimento" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-5 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={creditCard} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="número do cartão" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={calendario} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="validade" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <img src={cadeado} alt="Icone" />
                                    </span>
                                </div>
                                <input className="form-control" placeholder="cód. de segurança" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mb-3">
                    <h2 className="titulo_simples_2">
                        ENDEREÇO DA FATURA DO CARTÃO
                    </h2>

                    <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between">

                        <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                            <div className="input-group">
                                <input id="fatura_cep" className="input_custom form-control pl-3" placeholder="CEP" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-6 p-0">
                            <div className="input-group">
                                <input id="fatura_logradouro" className="input_custom form-control pl-3" placeholder="logradouro" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-2 p-0">
                            <div className="input-group">
                                <input className="input_custom form-control pl-3" placeholder="número" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                            <div className="input-group">
                                <input id="fatura_bairro" className="input_custom form-control pl-3" placeholder="bairro" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                            <div className="input-group">
                                <input id="fatura_cidade" className="input_custom form-control pl-3" placeholder="cidade" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="form-group col-12 col-lg-3 p-0">
                            <select id="fatura_uf" className="select_custom form-control" defaultValue="UF" onChange={()=>{}} style={{height: '48px'}}>
                                <option value="UF" disabled>UF</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                        <div className="input_icon_custom form-group col-12 col-lg-6 p-0">
                            <div className="input-group">
                                <input className="input_custom form-control pl-3" placeholder="complemento" />
                            </div>

                            <div className="d-block">
                                <span className="erro_msg">Mensagem de erro</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="mb-3">
                    <h2 className="titulo_simples_2">
                        O ENREDEÇO DE RECEBIMENTO É O MESMO DA FATURA DO CARTÃO?
                    </h2>

                    <div className="d-flex col-12 col-md-4 p-0">
                        <div className="switcher">
                            <div onClick={ () => setShowFormFatura(false) } className={`switcher_bt ${!showFormFatura && 'switcher_active'}`}>SIM</div>
                            <div onClick={ () => setShowFormFatura(true) } className={`switcher_bt ${showFormFatura && 'switcher_active'}`}>NÃO</div>
                            <input id="switcher_value" type="hidden" value="0" className="d-none" />
                        </div>
                    </div>

                    <div id="space_div" className={`mb-5 ${!showFormFatura && 'd-none'}`}></div>

                    <div id="div_endereço_recebimento" className={`collapse ${showFormFatura && 'show'} mt-4 pt-4`} style={{borderTop: '1px solid #ccc'}}>
                        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between">

                            <div className="input_icon_custom form-group col-12 col-lg-3 p-0">
                                <div className="input-group">
                                    <input id="recebimento_cep" className="input_custom form-control pl-3" placeholder="CEP" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-6 p-0">
                                <div className="input-group">
                                    <input id="recebimento_logradouro" className="input_custom form-control pl-3" placeholder="logradouro" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-2 p-0">
                                <div className="input-group">
                                    <input className="input_custom form-control pl-3" placeholder="número" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                                <div className="input-group">
                                    <input id="recebimento_bairro" className="input_custom form-control pl-3" placeholder="bairro" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-4 p-0">
                                <div className="input-group">
                                    <input id="recebimento_cidade" className="input_custom form-control pl-3" placeholder="cidade" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="form-group col-12 col-lg-3 p-0">
                                <select id="recebimento_uf" className="select_custom form-control" defaultValue="UF" onChange={()=>{}} style={{height: '48px'}}>
                                    <option value="UF" disabled>UF</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group col-12 col-lg-6 p-0">
                                <div className="input-group">
                                    <input className="input_custom form-control pl-3" placeholder="complemento" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
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

                <textarea onScroll={LiberaCheck} className="form-control w-100" rows={10} spellCheck="false" onChange={()=>{}} value={`1. A entrada na cidade de Arraial do Cabo está restrita a apresentação do QR CODE que foi enviado para o número de telefone informado no ato da compra;

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

                <div className="custom-control custom-checkbox mt-3">
                    <input id="termos_condicoes_check" type="checkbox" className="custom-control-input" disabled={disabledCheck} />
                    <label id="termos_condicoes_check_label" className={`custom-control-label font-weight-bold ${!disabledCheck && 'anima_termos_condicoes'}`} htmlFor="termos_condicoes_check">
                        Concordo com os termos e condições
                    </label>

                    <div id="termos_condicoes_check_erro" className="d-block">
                        <span className="erro_msg d-none">É necessário concordar com os termos e condições.</span>
                    </div>
                </div>
            </div>

            {/* RESUMO  */}
            <div id="resumo" className="mt-4">
                <hr />
                <div className="mb-3 mt-4">
                    <h2 className="titulo_secao">RESUMO DO PEDIDO</h2>
                </div>

                <div className="mb-4">


                    <div className="card_resumo d-flex align-items-center mb-3">
                        <div className="mr-3">
                            <img className="img-fluid" src="https://dummyimage.com/100x100.png/09f/fff" alt="Icone" />
                        </div>
                        <div>
                            <h3 className="card_resumo_titulo m-0">Titulo da peça</h3>
                            <p className="card_resumo_qtd m-0">Quantidade - <span id="qtd">99</span></p>
                            <p className="card_resumo_total m-0">R$ 99,99</p>
                        </div>
                    </div>

                    <div className="card_resumo d-flex align-items-center mb-3">
                        <div className="mr-3">
                            <img className="img-fluid" src="https://dummyimage.com/100x100.png/09f/fff" alt="Icone" />
                        </div>
                        <div>
                            <h3 className="card_resumo_titulo m-0">Titulo da peça</h3>
                            <p className="card_resumo_qtd m-0">Quantidade - <span id="qtd">99</span></p>
                            <p className="card_resumo_total m-0">R$ 99,99</p>
                        </div>
                    </div>

                    <div className="card_resumo d-flex align-items-center mb-3">
                        <div className="mr-3">
                            <img className="img-fluid" src="https://dummyimage.com/100x100.png/09f/fff" alt="Icone" />
                        </div>
                        <div>
                            <h3 className="card_resumo_titulo m-0">Titulo da peça</h3>
                            <p className="card_resumo_qtd m-0">Quantidade - <span id="qtd">99</span></p>
                            <p className="card_resumo_total m-0">R$ 99,99</p>
                        </div>
                    </div>


                </div>

                <div className="pt-1" style={{borderTop: '1px solid #eee'}}>
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

                    <div className="mt-4 d-flex justify-content-end">
                        <button id="btn_prosseguir" className="btn_principal mb-2 col-12 col-md-6 col-lg-4" type="submit">PAGAR</button>
                    </div>
                </div>
            </div>
        </form>


    );
}

export default Pagamento;