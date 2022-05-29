import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import { Ball } from './Ball';

export const BallContainer = () => {

    const StyledDiv = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.inputColor};
    border-radius: 50%;
    display : 
   `
   const balloon = useSelector((state) => state.balloon.balloon)
   const [display, setDisplay] = useState("")
  
   console.log(balloon)
  
  return (
  <div style={{display: 'flex', flexDirection: "row",gap:"20px", width:"250px",height:"250px",border:"1px solid red",padding:"20px"}}>
        {balloon.map((value) =>{
             return(
                 <Ball key = {value.id} value={value}/>
             )
        })}
  </div>
  )
}
