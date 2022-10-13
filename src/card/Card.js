import React from "react";
import './Card.css';

const Card = ({id, title, poster, backdrop, rating, release}) =>{
    return (
        <div className='card' >
            <img className='poster-img' alt={`movie poster for ${title}`} src={poster}/>
            <h3>{title}</h3>
            <p className='rating'>{Math.round(rating)}/10</p>
            <p>{release}| Genre | Runtime</p>
            <p>Overview: description</p>           
        </div>
    )
}
//const backdropImg =  {background-img: URL(backdrop)}   

export default Card;
