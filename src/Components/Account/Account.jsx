import React, { useState } from "react"
import styled from "styled-components"
import privado from "../../assets/images/privado.svg"
import ojo from "../../assets/images/ojo.svg"
import dinero from "../../assets/images/dinero.svg"
import { Icono, IconoTheme, Btn, Box, Saldo, Detalle } from "../UI/UI"

//Herencia, heredamos los estilos de "Icono" y le agregamos estilos adicionales
const IconoSaldo = styled.span`
  margin-left: 10px;
`

const IconoPriv = styled(Icono)`
  margin-top: "2px";
`

const Account = () => {
  const [toggleState, untoggle] = useState(true)

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState)
  }

  return (
    <Box>
      <h2>Cuenta</h2>

      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <IconoSaldo>
          <IconoTheme src={dinero} alt="Icono de saldo" />
        </IconoSaldo>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconoPriv src={toggleState ? privado : ojo} alt="Privacidad de saldo" />
      </Btn>
    </Box>
  )
}

export default Account
