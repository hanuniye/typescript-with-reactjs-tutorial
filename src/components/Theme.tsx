import React, { useContext } from 'react'
import { context } from '../context/context'

const Theme = () => {
    const {state, dispatch} = useContext(context)
    console.log(state)
  return (
    <div>
      <button onClick={() => dispatch({
        type:"THEME_TYPE",
      })}>change theme</button>
      <button onClick={() => dispatch({
        type:"FONTSIZE_TYPE",
        payload: 30
      })}>change fontsize</button>
    </div>
  )
}

export default Theme
