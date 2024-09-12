import React from "react"
import alimentacion from "../assets/images/alimentacion.svg"
import salud from "../assets/images/salud.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import dinero from "../assets/images/dinero.svg"
import otros from "../assets/images/otros.svg"

import { IconoTheme } from "./UI/UI.jsx"

const Images = {
  Restaurante: <IconoTheme src={alimentacion} alt="Restaurante" />,
  Salud: <IconoTheme src={salud} alt="Salud" />,
  Transporte: <IconoTheme src={transporte} alt="Transporte" />,
  Utilidades: <IconoTheme src={utilidades} alt="Utilidades" />,
  Otros: <IconoTheme src={otros} alt="Otros" />,
  Dinero: <IconoTheme src={dinero} alt="Dinero" />,
  default: <IconoTheme src={otros} alt="Otros" />
}

function ImageFilter(type) {
  return Images[type] || Images["default"]
}

export default ImageFilter
