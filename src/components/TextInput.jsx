import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBalloonByID } from '../Redux/balloon/action';
import { postBalloon } from '../Redux/balloon/action';

export const TextInput = () => {
    const [value, setNumber] = useState();
    const data = useSelector(state => state.balloon.data)
    const box = useSelector(state => state.balloon.box);

    const dispatch = useDispatch();

    
    const handleSubmit = (e) =>{
        e.preventDefault();

        (value > data.length) ? alert("Position doesn't exist") : setNumber()
       let newData = [...box]
       const sourceData =  data.map((data) =>{
            if(data.position === Number(value)){
                console.log(value)
                data.display = "none";
                data.position = null

                newData.push(data)
            }
            setNumber(0)
            return data;
        })
        dispatch(getBalloonByID(newData))
        let count = 1
        // re-ordered  the position of balls after removing a ball;
        let ordered = sourceData.map((item) => {
            if (item.display == "block") {
                item.position = count;
                count++;
            }
            return item;
        })

        // updating the balls info in data
        dispatch(postBalloon(ordered))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={value} onChange={(e) => setNumber(e.target.value)} required/>
                <input type = "submit" value = "HIT THE BALL" />
            </form>
        </div>
    )
}
