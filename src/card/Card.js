import React from "react";
import './Card.css';

const Card = ({id, title, poster, backdrop, rating, release}) =>{
    return (
        <div className='card' >
            <h1>{title}</h1>
            <p className='rating'>{Math.round(rating)}</p>
            <p>{release}| Genre | Runtime</p>
            <p>Overview: description</p>
            <img></img>
        </div>
    )
}
//const backdropImg =  {background-img: URL(backdrop)}   

export default Card;
