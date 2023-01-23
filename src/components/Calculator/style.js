import styled from "styled-components";

export const Container =  styled.div`
    /* Estilização para deixar o tamanho padrão em todas telas de PC */
    min-width: 45%;
    max-width: 608px;
    min-height: 60vh;
    max-height: 389px;

    border: 1px solid #D1DCE3;
    display: flex;
    font-family: 'Source Sans Pro', sans-serif;


`
export const BoxLeft = styled.div`
    flex-grow: 1;
    padding-top: 41px;
    padding-left: 56px;
    padding-right: 71px;
    display: flex;
    flex-direction: column;

    h1 {
        color: #656565;
        font-size: 24px;
        font-weight: bold;
        line-height: 28.13px;
        width: 250px;
        height: 30px;
    }

`
export const Form = styled.form`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    label {
        margin-top: 26px;
        font-size: 14px;
        color: #656565;
    }

    input {
        margin-top: 6px;
        width: 100%;
        height: 37px;
        min-height: 5%;
        border-radius: 4px;
        border: 1px solid #DDE6E9;
        outline: 0;

        &:focus {
            border: 1px solid #66AFE9;
        }


    }
    span {
        color: #CECECE;
        font-size: 11px;
        font-weight: 700;
        line-height: 12.89px;
    }

`

export const BoxRight = styled.div`
    background-color: #F7F9FA;
    width: 231px;
    max-width: 35%;
    padding-left: 36px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-weight: 700;
        font-style: italic;
        font-size: 16px;
        color: #3D75BB;
        text-transform: uppercase;
        margin-top: 86px;
        border-bottom: 1px solid #C9DEF6;
        width: 160px;
    }
    span {
        font-weight: 400;
        font-style: italic;
        color: #5D9CEC;
        font-size: 16px;

        b {
            font-weight: 700;
        }
    }

`
