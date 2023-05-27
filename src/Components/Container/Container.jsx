import React from "react"
import Title from "../TitleH/TitleH.jsx"
import Account from "../Account/Account.jsx"

const Container = () => {
  return (
    <div className="container">
      <Title>Smart Bank</Title>
      <section className="content">
        <Account />
      </section>
    </div>
  )
}

export default Container
