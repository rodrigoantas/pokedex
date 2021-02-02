import React from 'react';

import { Container, Content } from './styles'
import { Link } from 'react-router-dom'

// Header component, to be used in every page of the application
const Header: React.FC = () => {


  return (
  <Container>
    <Content>
      <Link to="/">
        <img src="https://miro.medium.com/max/5000/1*lXH0CroMTAQKIfDzn-brPw.png" alt="pokemon"/>
      </Link>
    </Content>
  </Container>
  )

}

export default Header