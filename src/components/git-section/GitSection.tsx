import React from 'react'
import GitElement from './GitElement'

const GitSection = () => {
  return (
    <div className='grid pt-5 grid-cols-2 grid-rows-3 text-center h-screen gap-4'>
        <GitElement url={'hello'}/>
    </div>
  )
}

export default GitSection