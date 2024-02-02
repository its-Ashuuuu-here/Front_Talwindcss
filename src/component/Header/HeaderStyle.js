import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #262626;
 
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  h1 {
    color: White;
    margin-left: 0px; 
    font-size: 25px;
    font-weight: 400;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }
  }
`;

export const Logo = styled.img`
  width: 40px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;
