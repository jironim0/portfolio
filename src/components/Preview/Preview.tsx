import React from 'react'

const Preview = () => {
  return (
    <div className='grid grid-cols-5 grid-rows-5 p-20 gap-2 bg-slate-500 h-screen'>
        <div className='bg-slate-400 text-8xl font-bold row-start-2 col-start-1 col-span-2 justify-self-start'>Nadir</div>
        <div className='bg-slate-400 text-8xl font-bold row-start-3 col-start-2 col-span-4 justify-self-start'>React Front-End</div>
        <div className='bg-slate-400 text-8xl font-bold row-start-4 col-start-3 col-span-4 justify-self-center'>Developer</div>
    </div>
  )
}

export default Preview