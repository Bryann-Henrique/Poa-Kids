import styled from 'styled-components';

export const Container = styled.label`
    cursor: pointer;
    user-select: none;
    
    input {
        display: none;
    }
    span {
        display: inline-block;
        width: 70px;
        padding: 10px 0;
        border-radius: 10px;
        border: 2px solid white;
        background-color: #40AEBF;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        transition: .4s;
    }
    &:hover > span {
        opacity: .7 !important;
    }
    input:checked ~ span {
        background-color: #EF5FA3;
    }
`;