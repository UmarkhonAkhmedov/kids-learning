import React from 'react';
import styled from 'styled-components';

function Button({button, filter}) {
  return (
    <FilterButton className='filterButton'>
      {button.map((category, index) => {
        return (
          <button className='button' key={index} type='button' onClick={()=>filter(category)}>{category}</button>
        )
      })}
    </FilterButton>
  );
}

export default Button;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  button {
    background-color: #C6F4F8;
    border-radius: 20px;
    border: none;
    padding: 5px 15px;
    margin: 0 5px;
    font-size: 18px;
    color: black;
  }
`