import React from 'react'

function Button({color,text}) {
  return (
    <button className={`rounded-full ${color === 'yellow' ? 'bg-tsyellow' : 'bg-white'} py-2 px-3 `}  >{text}</button>
  )
}

export default Button