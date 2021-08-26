import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WebsiteRights = styled.small`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 20px auto;
  color: #fff;
  margin-bottom: 16px;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
`

function Footer() {
  return (
    <FooterContainer>
      <WebsiteRights>
        ©{new Date().getFullYear()} Designed By Cesar Camilo ❤
      </WebsiteRights>
    </FooterContainer>
  )
}

export default Footer