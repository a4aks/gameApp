import React from 'react'
import { BallContainer } from './BallContainer'
import { DisplayBall } from './DisplayBall'
import { TextInput } from './TextInput'
import styles from "./DisplayPage.module.css";

export const DisplayPage = () => {
  return (
    <div className={styles.div}>
         <BallContainer />
         <DisplayBall />
         <TextInput />
    </div>
  )
}
