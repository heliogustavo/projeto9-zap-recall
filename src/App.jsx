import styled from "styled-components"
import Topo from "./Topo"
import ContainerPerguntas from "./ContainerPerguntas"


export default function App() {

  return (
    
      <ContainerGeral>
             <Topo/>
            <ContainerPerguntas/>
      </ContainerGeral>
  )
}

const ContainerGeral = styled.div`
    width: 500px;
    height: 500px;
    background-color: red;
`