import React from 'react'

type Props = {}
//this is just a test route to see if protect middleware works
const Protected = (props: Props) => {
  return (
    <div>Protected</div>
  )
}

export default Protected