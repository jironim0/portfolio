import React, { FC, ReactNode } from 'react'

interface WrapperProps {
    children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {
  return (
    <div className="container mx-auto min-h-screen">
        {children}
    </div>
  )
}

export default Wrapper