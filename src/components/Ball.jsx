import React from 'react'
import { useDispatch } from 'react-redux'


export const Ball = ({value}) => {
    console.log(value)

const dispatch = useDispatch()
    const getId = (id) =>{
     console.log(id)
    //   dispatch(postBallonByID(id))
    }
  return (
    <div>
        {value.map((value) => {
            return  <div style={{width: "50px", height:"50px", borderRadius:"50%", backgroundColor : value.color }} onClick= {getId(value.id)}></div>
        })}
    </div>
  )
}
