
import { initialState } from "./constant"
import { GET_BALLOON, GET_BALLOONBY_ID, POST_BALLOON_ID } from "./actiontype";

const balloonreducer = (state = initialState, { type, payload }) =>{

    switch(type){
        case GET_BALLOON :{
            return{
                ...state,
                data:payload
            }
        }
        case GET_BALLOONBY_ID :{
            // state.data.map((data) =>{
            //     if(data.id === payload){
            //         data.popped = "none"
            //     }
            // })
            return {
                ...state,
                balloon: [...state.balloon, state.data.filter((val) => val.id == payload)],
                data: [...state.data, state.data.map((data) =>{
                    if(data.id === payload){
                        data.popped = "none"
                    }
                })],
            }
        }
        // case POST_BALLOON_ID :{
        //     return{
        //         ...state,
        //         balloon: [...state.balloon , state.balloon.filter((data) => data.id !== payload)],
        //         data: [...state.data, state.data.map((data) =>{
        //             if(data.id === payload){
        //                 data.popped = ""
        //             }
        //         })],
        //     }    
        // }
        default:
            return state;
    }

}
export{  balloonreducer }