import React from 'react';

const Card = (props) => {
  return (
    <div className="card"
      style={{
        border: '1px solid #e6e6e6',
        width: '25%',
        margin: 20,
        padding: 20,
        borderRadius: 8,
        display: 'inline-block',
        verticalAlign: 'top'
      }}
    >
      <img
        src={props.avatar_url}
        alt={props.name}
        style={{
          width: 75,
          height: 75,
        }}
      />
      <h2>{props.name}</h2>
      <div>{props.company}</div>
    </div>
  )
}

export default Card;