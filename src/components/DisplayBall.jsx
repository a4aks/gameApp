import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getBalloon } from '../Redux/balloon/action';

export const DisplayBall = () => {

  const StyledDiv = styled.div`
        width: 50px;
        height: 50px;
        background-color: ${props => props.inputColor};
        border-radius: 50%;
        display : ${props => props.display};
        margin: 10px;
  `
  
  const data = useSelector(state => state.balloon.data)

  return (
    <div>
        {data.map((data) =>{
           return(
              <StyledDiv inputColor ={data.color} display = { data.display}></StyledDiv>
           )
        })}
     
    </div>
  )
}

