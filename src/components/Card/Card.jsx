import React from 'react';
import './Card.css';

const Card = ({ children, title, className = 'card' }) => {
  return (
    <div className={className}>
      {title ? <h2 className="card__title">{title}</h2> : <></>}
      {children}
    </div>
  );
};
export default Card;
