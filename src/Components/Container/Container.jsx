import React from "react"
import styled from "styled-components"
import TitleH from "../TitleH/TitleH.jsx"
import Account from "../Account/Account.jsx"
import List from "../List/List.jsx"

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;

  //Los media query se añaden a su clase de styled components
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <StyledContainer>
      <TitleH>Smart Bank</TitleH>

      <StyledSection>
        <Account />

        <List />
      </StyledSection>
    </StyledContainer>
  )
}

export default Container
