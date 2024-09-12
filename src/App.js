import React, { useState, useEffect } from "react"
import GlobalStyled from "./components/GlobalStyled.jsx"
import { ThemeProvider } from "styled-components"

import Header from "./components/Header/Header.jsx"
import Container from "./components/Container/Container.jsx"
import SwitcherTheme from "./components/SwitcherTheme/SwitcherTheme.jsx"

import { temaClaro, temaOscuro } from "./components/UI/Temas.jsx"
import { BtnTheme } from "./components/UI/UI.jsx"

function App() {
  const [tema, setTema] = useState(() => {
    const temaGuardado = localStorage.getItem("tema")

    return temaGuardado ? JSON.parse(temaGuardado) : true
  })

  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema))
  })

  const toogleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyled />

      <BtnTheme onClick={toogleTema}>
        <SwitcherTheme tema={tema} />
      </BtnTheme>

      <Header />

      <Container />
    </ThemeProvider>
  )
}

export default App
