import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
      <div className='container nav__block'>
        <Logo>
          KidStudy
        </Logo>
        <Search>
          <input type='text' placeholder='Search'/>
          <img src="https://img.icons8.com/ios/50/ffffff/search--v1.png"/>
        </Search>
        <Categories>
          Contact Us
        </Categories>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  background-color: #2F364B;
  color: white;
  padding: 20px 0;

  .nav__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
` 
const Logo = styled.div`
  font-size: 26px;
`
const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  width: 100%;
  max-width: 500px;
  border-radius: 25px;
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 20px;
    background-color: transparent;
    color: white;

    &::placeholder {
      color: white;
      font-size: 17px;
    }
  }

  img {
    width: 25px;
    height: 25px;
    color: white;
    margin-right: 20px;

  }
`
const Categories = styled.button`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 25px;
  background-color: #00BAC7;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`