import styled from 'styled-components';


export const HeaderContainer = styled.div`
  // font-family: 'Courier New', monospace;
  // font-weight: 700;
  // font-size: 3em;
  // color: black;
  // margin-top: 2%;
  margin-bottom: 50px;
  // margin-left: 3%;
  // margin-right: 2%;
  height: 5rem;
  padding-top: 20px;
  background: #99AEAD;
  width: 100%;

  display: flex;
  flex-direction: row;

  & #logo {
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  }

  & ul {
    display: flex;
    flex-direction: row;
  }

  & li {
    list-style-type: none;
    margin: 0 1rem;
  }

  & li a {
    text-decoration: none;
    display: block;
    width: 100%;
  }
`

export const Nav = styled.div`
  margin-left: 1rem;
`;


export const Logo = styled.img`
  max-height: 1em
`