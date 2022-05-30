import { POST_BALLOON, GET_BALLOONBY_ID,POST_BALLOON_ID } from "./actiontype"

export const postBalloon = (payload) =>({
   type: POST_BALLOON,
   payload
})

export const getBalloonByID = (payload) =>({
    type:GET_BALLOONBY_ID,
    payload
})

// export const postBallonByID = (payload) =>({
//     type: POST_BALLOON_ID,
//     payload
// })