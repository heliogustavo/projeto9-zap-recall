import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card"
import Rodape from "./Rodape"
import logo from "./img/logo.png";

    const dados =[
        { question: "O que é JSX?",
          answer:"Uma extensão de linguagem do JavaScript"
        },
        { question: "O React é __",
          answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        { question: "Componentes devem iniciar com __",
          answer:"letra maiúscula"
        },
        { question: " Podemos colocar __ dentro do JSX",
          answer:"expressões"
        },
        { question: "O ReactDOM nos ajuda __",
          answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        { question: "Usamos o npm para __ ",
          answer:"gerenciar os pacotes necessários e suas dependências"
        },
        { question: "Usamos props para __",
          answer:"passar diferentes informações para componentes"
        },
        { question: "Usamos estado (state) para __ ",
          answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

export default function TelaDeJogo(){

    const [contador, setContador] = useState(0);

        return(
            <ContainerGeral>
                 <NomeELogo>
                       <img src={logo} alt="logo"></img>

                       <h1> Zap Recall</h1>
                  </NomeELogo>

                <div>

                    {dados.map((item, index)=> <Card contador= {contador} setContador = {setContador} pergunta={item.question} resposta={item.answer} numero={index}/>)}

                </div>
                  <Rodape contador={ contador }/>
            </ContainerGeral>
        )
}

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FB6B6B;;
    width: 375px;

`

const NomeELogo = styled.div`
    display: flex;
    width: 375px;
    height: 143px;
    align-items: center;
    justify-content: center;


    img{
        width: 52px;
        height: 60px;
    }
    h1{
        width: 203.17px;
height: 44px;

font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;

color: #FFFFFF;


    }
`
const Pergunta = styled.div`
    
`