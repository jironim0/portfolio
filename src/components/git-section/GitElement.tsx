import React, { FC } from 'react'

interface GitElementProps {
    url: string
}

const GitElement: FC<GitElementProps> = ({url}) => {
  return (
    <div>{url}</div>
  )
}

export default GitElement