import styled from "styled-components";
    
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 137px;

    & > * {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: #323232;
        height: 45px;
        width: 45px;
        padding: 0;
        margin: 0;
        border-radius: 6px;
        transition: .4s;
    }
    .control_number_sub {
        border: 1px solid #A3A3A3;
        background-color: transparent;
    }
    .control_number_soma {
        border: 1px solid #40AEBF;
        background-color: #40AEBF;
        color: white;
    }
    .control_number_valor {
        border: none;
        background-color: white !important;
    }
    input:focus {
        outline: none;
    }
    .control_number_sub:hover, .control_number_soma:hover {
        cursor: pointer;
    }
    .control_number_sub:active, .control_number_soma:active {
        transform: scale(1.2);
    }
    /* Remove setas da caixa de numero */
    input[type=number],
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: textfield;
        -webkit-appearance: none;
        margin: 0;
    }
`