import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBalloonByID } from '../Redux/balloon/action';
import { BallContainer } from './BallContainer';

export const TextInput = () => {
    const [number, setNumber] = useState("");
    // const balloon = useSelector((state) => state.balloon.balloon)
 
   const dispatch = useDispatch();

   const getBalloon = () =>{
    dispatch(getBalloonByID(Number(number)))
   }
 
  return (
    <div>
        <input type = "text" value = {number} onChange = {(e) =>setNumber(e.currentTarget.value)} />
        <button onClick={getBalloon}>ADD</button>
        {/* {balloon.map((value) =>{
            return <BallContainer key = {value.id} value = {value} />
        })} */}
    </div>
  )
}
