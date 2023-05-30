import React from "react"
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../UI/UI"

function SwitcherTheme({ tema }) {
  const claro = <Icono src={themeOn} alt="Tema claro" />
  const oscuro = <Icono src={themeOff} alt="Tema oscuro" />

  return <>{tema ? oscuro : claro}</>
}

export default SwitcherTheme
