import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import { getBalloonByID, postBalloon } from '../Redux/balloon/action';


export const BallContainer = () => {

   const box = useSelector(state => state.balloon.box);
   const data = useSelector(state => state.balloon.data)
 
  const dispatch = useDispatch()
  const handleShoot = (id) =>{
    const newBoxData = box.filter((item) => item.id !== id);

    // add ball to source after removing from destination;
    const newData = data.map((item) => {
        if (item.id == id) {
            item.display = "block";
        }
        return item;
    })

    // orderng the position of balls 
    let count = 1;
    const orderedData = newData.map((item) => {
        if (item.display == "block") {
            item.position = count;
            count++;
        }
        return item;
    })

    // update the position of ball  after removing ;
    dispatch(getBalloonByID(newBoxData))
    dispatch(postBalloon(orderedData))

  }
  
  return (
  <div style={{display: 'flex', flexDirection: "row",gap:"20px", width:"350px",height:"250px",border:"1px solid red",padding:"20px"}}>
     {box.map((item) =>{
        return  <div onClick={() => handleShoot(item.id)} key={item.id} style={{ backgroundColor: item.color, height: "40px", width: "40px",borderRadius:"50%" }}> </div>
     })}
  </div>
  )
}
