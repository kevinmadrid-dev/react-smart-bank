import React from "react"
import styled from "styled-components"

import ImageFilter from "../ImageFilter.jsx"

const CardStyled = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`

const InfoCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .type {
    font-weight: bold;
  }
`

function Card({ cargo }) {
  const { type, value, from, date } = cargo

  return (
    <CardStyled>
      {ImageFilter(type)}
      <InfoCardStyled>
        <span className="type">{value}</span>
        <span className="type">{from}</span>
        <span className="type">{type}</span>
      </InfoCardStyled>
      <span className="type">{date}</span>
    </CardStyled>
  )
}

export default Card
