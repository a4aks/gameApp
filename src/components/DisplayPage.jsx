import React from 'react'
import { BallContainer } from './BallContainer'
import { DisplayBall } from './DisplayBall'
import { TextInput } from './TextInput'
import styles from "./Display.Module.css";

export const DisplayPage = () => {
  return (
    <div className={styles.div}>
         <TextInput />
        <DisplayBall />
        <BallContainer />
    </div>
  )
}
