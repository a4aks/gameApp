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
  `
//   const setColor = () =>{
//      const box1 = Math.floor(Math.random()*16777215).toString(16)
//      return box1;
//   }
  const data = useSelector((state) => state.balloon.data)
  console.log(data)

  const balloon = [
    {id: 1, popped: "", color: "red"},
    {id: 2, popped: "", color: "black"},
    {id: 3, popped: "", color: "pink"},
    {id: 4, popped: "", color: "blue"},
    {id: 5, popped: "", color: "purple"}
  ]
  const [value, setValue] = useState(balloon)
  const dispatch = useDispatch()
  
  useEffect(() =>{
      dispatch(getBalloon(value))
  },[])
  return (
    <div>
        {data.map((data) =>{
           return(
              <StyledDiv inputColor ={data.color} display = {data.popped}></StyledDiv>
           )
        })}
     
    </div>
  )
}

