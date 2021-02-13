import React from 'react';

import Style from './style';

const Sobre: React.FC = () => {
    
    return (
        <>
            <Style />

            <div className="container" id="bg_teste">
                <div className="py-5">
                    <h1 className="sub_page_titulo">
                        SOBRE<br />
                        NÓS
                    </h1>
                </div>

                <div className="secao_1 mb-5 position-relative">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor massa sollicitudin consequat, tempus.
                    Ut sapien sed pellentesque nibh nec a. Natoque scelerisque ullamcorper quisque id consequat ut aliquet aliquet.

                    <svg id="circle_fly" width="204" height="204" viewBox="0 0 204 204" fill="none">
                        <circle cx="102" cy="102" r="100" stroke="#FFB3D7" strokeOpacity="0.5" strokeWidth="4" strokeMiterlimit="2.28281" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 6" />
                    </svg>
                </div>

                <div className="px-0 mx-0 px-md-5 mx-md-5">
                    <div className="secao_3 mb-5 d-flex flex-column flex-md-row align-items-md-center">
                        <div className="text-center mb-3 order-md-2">
                            <img className="img-fluid" src="https://dummyimage.com/300x300.png/09f/fff" alt="Catchuro" style={{maxWidth: '200px'}} />
                        </div>

                        <div className="text-center text-md-left pr-md-3">
                            <h2>Titulo Secundário</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Eget tincidunt ante dictum mi nulla augue vitae.
                        </div>
                    </div>
                </div>

                <div>
                    <div className="contato_link pl-4">
                        <a href="https://api.whatsapp.com/send?phone=5522997149497&text=Testando" className="contato_link_insta d-flex align-items-center mb-3" style={{color: '#4CAF50'}}>
                            <div className="d-flex align-items-center">
                                <svg className="pr-1" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M15.0037 0H14.9963C6.72563 0 0 6.7275 0 15C0 18.2812 1.0575 21.3225 2.85562 23.7919L0.98625 29.3644L6.75187 27.5213C9.12375 29.0925 11.9531 30 15.0037 30C23.2744 30 30 23.2706 30 15C30 6.72938 23.2744 0 15.0037 0Z" fill="#4CAF50" />
                                    <path d="M23.7323 21.1818C23.3704 22.2037 21.9341 23.0512 20.7885 23.2987C20.0048 23.4656 18.981 23.5987 15.5348 22.17C11.1266 20.3437 8.2879 15.8643 8.06665 15.5737C7.85478 15.2831 6.2854 13.2018 6.2854 11.0493C6.2854 8.89685 7.37853 7.84872 7.81915 7.39872C8.18103 7.02935 8.77915 6.8606 9.3529 6.8606C9.53852 6.8606 9.7054 6.86997 9.8554 6.87747C10.296 6.89622 10.5173 6.92247 10.8079 7.6181C11.1698 8.48997 12.051 10.6425 12.156 10.8637C12.2629 11.085 12.3698 11.385 12.2198 11.6756C12.0792 11.9756 11.9554 12.1087 11.7341 12.3637C11.5129 12.6187 11.3029 12.8137 11.0816 13.0875C10.8791 13.3256 10.6504 13.5806 10.9054 14.0212C11.1604 14.4525 12.0416 15.8906 13.3391 17.0456C15.0135 18.5362 16.371 19.0125 16.8566 19.215C17.2185 19.365 17.6498 19.3293 17.9141 19.0481C18.2498 18.6862 18.6641 18.0862 19.086 17.4956C19.386 17.0718 19.7648 17.0193 20.1623 17.1693C20.5673 17.31 22.7104 18.3693 23.151 18.5887C23.5916 18.81 23.8823 18.915 23.9891 19.1006C24.0941 19.2862 24.0941 20.1581 23.7323 21.1818Z" fill="#FAFAFA" />
                                </svg>
                                Nosso WhatsApp
                            </div>
                        </a>

                        <a href="https://www.instagram.com/usepoakids/" className="contato_link_insta d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <svg className="pr-1" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M1.87501 2.04122C-0.482495 4.48997 4.93973e-06 7.09122 4.93973e-06 14.9937C4.93973e-06 21.5562 -1.145 28.135 4.84751 29.6837C6.71876 30.165 23.2988 30.165 25.1675 29.6812C27.6625 29.0375 29.6925 27.0137 29.97 23.485C30.0088 22.9925 30.0088 7.00372 29.9688 6.50122C29.6738 2.74247 27.36 0.576216 24.3113 0.137466C23.6125 0.0362164 23.4725 0.00621644 19.8875 -3.35649e-05C7.17126 0.00621644 4.38376 -0.560034 1.87501 2.04122Z" fill="url(#paint0_linear)" />
                                        <path d="M14.9975 3.92378C10.4588 3.92378 6.14876 3.52003 4.50251 7.74503C3.82251 9.49003 3.92126 11.7563 3.92126 15.0013C3.92126 17.8488 3.83001 20.525 4.50251 22.2563C6.14501 26.4838 10.49 26.0788 14.995 26.0788C19.3413 26.0788 23.8225 26.5313 25.4888 22.2563C26.17 20.4938 26.07 18.2613 26.07 15.0013C26.07 10.6738 26.3088 7.88003 24.21 5.78253C22.085 3.65753 19.2113 3.92378 14.9925 3.92378H14.9975ZM14.005 5.92003C23.4725 5.90503 24.6775 4.85253 24.0125 19.4738C23.7763 24.645 19.8388 24.0775 14.9988 24.0775C6.17376 24.0775 5.92001 23.825 5.92001 14.9963C5.92001 6.06503 6.62001 5.92503 14.005 5.91753V5.92003ZM20.91 7.75878C20.1763 7.75878 19.5813 8.35378 19.5813 9.08753C19.5813 9.82128 20.1763 10.4163 20.91 10.4163C21.6438 10.4163 22.2388 9.82128 22.2388 9.08753C22.2388 8.35378 21.6438 7.75878 20.91 7.75878ZM14.9975 9.31253C11.8563 9.31253 9.31001 11.86 9.31001 15.0013C9.31001 18.1425 11.8563 20.6888 14.9975 20.6888C18.1388 20.6888 20.6838 18.1425 20.6838 15.0013C20.6838 11.86 18.1388 9.31253 14.9975 9.31253ZM14.9975 11.3088C19.8788 11.3088 19.885 18.6938 14.9975 18.6938C10.1175 18.6938 10.11 11.3088 14.9975 11.3088Z" fill="white" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="1.93253" y1="28.0838" x2="29.8144" y2="3.95243" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFDD55" />
                                            <stop offset="0.5" stop-color="#FF543E" />
                                            <stop offset="1" stop-color="#C837AB" />
                                        </linearGradient>
                                        <clipPath id="clip0">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Envie um direct
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre;