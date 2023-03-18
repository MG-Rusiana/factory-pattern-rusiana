import React from 'react'

export const ButtonFactory = (props) => {

  return (
    <button 
        className='active:scale-[0.9] hover:opacity-[0.8] shadow-md'
        style={{
            backgroundColor: (props.color),
            height: (props.height),
            width: (props.width),
            border: 'none',
            borderRadius: 5,
            fontFamily: 'serif',
            fontSize: 25,
        }}
    >{props.title}
    </button>
  )
}

