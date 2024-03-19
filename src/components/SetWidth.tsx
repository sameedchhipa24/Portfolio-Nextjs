import React from 'react'

const SetWidth = ({children}:any) => {
  return (
    <div className='md:max-w-screen-xl mx-auto'>
        {children}
    </div>
  )
}

export default SetWidth