import React from 'react';
import styled from 'styled-components';

//type에 따라서 초록 버튼인지 회색 테두리 버튼인지 결정하게 수정하면 편함

const Button = styled.div`
    width: 45rem;
    height: 7rem;
    line-height: 35px; 
    border-radius: 1.5rem;
    background-color: white;
    cursor:pointer;
    margin : 1.5rem;
    display: inline-flex;

    color :black;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: 400;
    font-size:1.5rem;
    text-align:center;
    border: 3px solid lightgray;


`

function ButtonComponent({ idx, type, text, onclick }) {

    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default ButtonComponent;