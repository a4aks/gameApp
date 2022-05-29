import { GET_BALLOON, GET_BALLOONBY_ID,POST_BALLOON_ID } from "./actiontype"

export const getBalloon = (payload) =>({
   type: GET_BALLOON,
   payload
})

export const getBalloonByID = (payload) =>({
    type:GET_BALLOONBY_ID,
    payload
})

export const postBallonByID = (payload) =>({
    type: POST_BALLOON_ID,
    payload
})