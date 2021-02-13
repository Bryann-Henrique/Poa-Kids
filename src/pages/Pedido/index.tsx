import React from 'react';

import Style from './style';

import userImg from '../../assets/img/icons/form/user.svg';
import idImg from '../../assets/img/icons/form/id.svg';

const Pedido: React.FC = () => {
    
    return (
        <>
            <Style />

            <div className="container">

                <div className="py-5">
                    <h1 className="sub_page_titulo">
                        CONSULTAR PEDIDOS
                    </h1>
                </div>

                <div className="conteudo d-flex flex-column flex-lg-row justify-content-between">
                    {/* CONTEÚDO  */}
                    <div className="col-12 col-lg-3 p-0">
                        <form action="" method="get">

                            <div className="input_icon_custom form-group p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={userImg} alt="User" />
                                        </span>
                                    </div>
                                    <input id="cpf" className="form-control" placeholder="CPF" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="input_icon_custom form-group p-0">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <img src={idImg} alt="Email" />
                                        </span>
                                    </div>
                                    <input id="email" className="form-control" placeholder="e-mail" />
                                </div>

                                <div className="d-block">
                                    <span className="erro_msg">Mensagem de erro</span>
                                </div>
                            </div>

                            <div className="">
                                <input className="btn_principal" type="submit" value="CONSULTAR" />
                            </div>
                        </form>
                    </div>

                    <div className="d-lg-none mt-3 mb-4">
                        <hr />
                    </div>

                    <div className="col-12 col-lg-8 p-0 m-0 d-flex justify-content-center">
                        {true ? 
                            <table id="tabela_pedidos" className="w-100">
                                <thead>
                                    <tr>
                                        <th className="px-2 py-3 text-center">#</th>
                                        <th className="px-2 py-3 d-none d-md-block">DATA PAGAMENTO</th>
                                        <th className="px-2 py-3">DATA PASSEIO</th>
                                        <th className="px-2 py-3">STATUS</th>
                                        <th className="px-2 py-3 d-none d-md-block">VALOR RESERVA</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[...Array(4)].map((value, index) => (
                                        <tr key={index}>
                                            <td className="p-2 text-center">
                                                <a href="none" className="btn btn_pedido_detalhe">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <g clip-path="url(#clip0)">
                                                            <path d="M13.4874 5.76256C14.1708 6.44598 14.1708 7.55402 13.4874 8.23743C12.804 8.92085 11.696 8.92085 11.0126 8.23743C10.3291 7.55402 10.3291 6.44598 11.0126 5.76256C11.696 5.07915 12.804 5.07915 13.4874 5.76256Z" fill="#454545" />
                                                            <path d="M8.23743 5.76256C8.92084 6.44598 8.92084 7.55402 8.23743 8.23743C7.55402 8.92085 6.44598 8.92085 5.76256 8.23743C5.07915 7.55402 5.07915 6.44598 5.76256 5.76256C6.44598 5.07915 7.55402 5.07915 8.23743 5.76256Z" fill="#454545" />
                                                            <path d="M2.98743 5.76256C3.67085 6.44598 3.67085 7.55402 2.98743 8.23743C2.30402 8.92085 1.19598 8.92085 0.512561 8.23743C-0.170854 7.55402 -0.170854 6.44598 0.512561 5.76256C1.19598 5.07915 2.30402 5.07915 2.98743 5.76256Z" fill="#454545" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0">
                                                                <rect width="14" height="14" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </td>
                                            <td className="p-2">04/12/2020</td>
                                            <td className="p-2">04/12/2020</td>
                                            <td className="p-2">AGUARDANDO PAGAMENTO</td>
                                            <td className="p-2">R$ 100,00</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        :
                            <div className="d-flex align-items-center justify-content-center text-center">
                                <h2 className="mt-3" style={{color: '#454545'}}>
                                    Nenhum pedido encontrado...
                                </h2>
                            </div>
                        }
                    </div>
                </div>

                <div className="d-none d-md-block py-4 my-5"></div>
            </div>
        </>
    )
}

export default Pedido;