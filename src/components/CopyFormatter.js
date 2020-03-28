import React from 'react'

const linkScan = (text) => {
  return (
    {text}
  )
}

const CopyFormatter = ({src}) => {

  return (
    <>
      {src.split(/\n/).map((a, id) => 
        <p key={id}>
          {a}
        </p>
      )}
    </>
  )
}

export default CopyFormatter