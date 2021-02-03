import styled from 'styled-components';

export const Container = styled.label`
    cursor: pointer;
    user-select: none;
    margin-right: 10px;

    input {
        display: none;
    }
    span {
        display: inline-block;
        height: 50px;
        width: 50px;
        background-color: #eee;
        border-radius: 50%;
        border: 2px solid white;
        transition: .4s;
    }
    &:hover > span {
        opacity: .7 !important;
    }
    input:checked ~ span {
        background-color: #2196F3;
        box-shadow: 0 0 0px 2px #EF5FA3;
    }
`;