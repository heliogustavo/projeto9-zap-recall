import React from "react";
import styled from "styled-components";

export default function Rodape(props){
    return(
             <RodapeStyle>
                    <h3>{props.contador}/8 Concluído</h3>
             </RodapeStyle>
    )
}

const RodapeStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 375px;
height: 70px;
margin-top: 46px;
background: #FFFFFF;

 h3{
width: 145px;
height: 22px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;

color: #333333;
}
`