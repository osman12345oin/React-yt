import React from 'react'

const Card = (props) => {
  return (
        <div className="card">
            <img src={props.img} alt="profile" />
            <h2>{props.user}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='btn'>View Profile</button>
        </div>
  )
}

export default Card