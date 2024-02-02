import React from 'react';
import { StyledHeader, Nav, Logo } from './HeaderStyle';
import { Container } from '../Container/ContainerStyled';
import { Button } from '../Button';
const Header = () => {
  return (
    <StyledHeader className="lg:pl-15 lg:pr-15">
    <Container>
      <Nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <Logo src='../images/logo.svg' alt='logo' className="w-10 sm:w-12 md:w-14 lg:w-15" />
          <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold md:ml-2">
            envato <span className="text-[#7aa93c]">market</span>
          </h1>
        </div> 

        <div className="flex items-center">
          <Button className="mt-2 mb-2">Buy Now</Button>
        </div>
      </Nav>
    </Container>
  </StyledHeader>

    
  );
}

export default Header;
