import React from "react"
import styled from "styled-components"
import logo from "../../assets/images/logo.svg"
import { colorPrimario, fondoClaro } from "../UI/Variables"

const StyledHeader = styled.div`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`

const StyledBtnPrimario = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${(props) => (props.backgroundPrimario ? "transparent" : fondoClaro)};
  color: ${(props) => (props.colorPrimario ? "white" : colorPrimario)};
`

const StyledBtnSecundario = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${(props) => (props.backgroundSecundario ? "white" : fondoClaro)};
  color: ${(props) => (props.colorSecundario ? colorPrimario : "black")};
`

const Header = () => {
  return (
    <StyledHeader className="header">
      <LogoImg className="imagen-logo" src={logo} alt="Logo Smart Bank" />

      <div>
        <StyledBtnSecundario
          backgroundSecundario
          colorSecundario
          href="https://google.com">
          Ayuda
        </StyledBtnSecundario>

        <StyledBtnPrimario
          backgroundPrimario
          colorPrimario
          href="https://google.com">
          Salir
        </StyledBtnPrimario>
      </div>
    </StyledHeader>
  )
}

export default Header
