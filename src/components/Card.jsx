import React from 'react'

const Card = ({elem, idx}) => {
  return (
      <div key={idx}>
        <a href={elem.download_url} target='_blank'>
      <div key={idx} className='h-40 w-44'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2>{elem.author}</h2>
      </a>
      </div>

  )
}

export default Card
