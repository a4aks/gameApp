
import { initialState } from "./constant"
import { POST_BALLOON, GET_BALLOONBY_ID, POST_BALLOON_ID } from "./actiontype";

const balloonreducer = (state = initialState, { type, payload }) =>{

    switch(type){
        case POST_BALLOON :{
            return{
                ...state,
                data:payload
            }
        }
        case GET_BALLOONBY_ID :{
            return{
                ...state,
                box: payload
            }
        }
      
        default:
            return state
    }

}
export{  balloonreducer }