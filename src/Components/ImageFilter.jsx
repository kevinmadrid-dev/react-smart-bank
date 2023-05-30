import React from "react"
import alimentacion from "../assets/images/alimentacion.svg"
import salud from "../assets/images/salud.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import dinero from "../assets/images/dinero.svg"
import otros from "../assets/images/otros.svg"

import { Icono } from "./UI/UI.jsx"

const Images = {
  Restaurante: <Icono src={alimentacion} alt="Restaurante" />,
  Salud: <Icono src={salud} alt="Salud" />,
  Transporte: <Icono src={transporte} alt="Transporte" />,
  Utilidades: <Icono src={utilidades} alt="Utilidades" />,
  Otros: <Icono src={otros} alt="Otros" />,
  Dinero: <Icono src={dinero} alt="Dinero" />,
  default: <Icono src={otros} alt="Otros" />
}

function ImageFilter(type) {
  return Images[type] || Images["default"]
}

export default ImageFilter
