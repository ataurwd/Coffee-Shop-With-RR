import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SingleCard = ({coffee, removeItemHandel}) => {
    const {pathname} = useLocation()
    const {name, origin, image, category,type, rating, popularity, id} = coffee;   
    
    // remove item from dashboard
    return (
        <div>
            <Link to={`/coffee/${id}`} className="flex relative"><div className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden" >
            <figure className="w-full h-48 overflow-hidden">
            <img  src={image} alt=""/>
            </figure>
            <div className="p-4">
                <h1 className="text-xl">{name}</h1>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popular: {popularity}</p>
                </div></div>
            </Link>
            {pathname === '/dashboard' && <img onClick={() => removeItemHandel(id)} className='w-10 h-10 absolute -top-5 -right-5 bg-yellow-300 p-2 rounded-full cursor-pointer'
                                src="https://icons.veryicon.com/png/o/miscellaneous/mahealth-pro/delete-295.png"/>}
        </div>
    );
};

export default SingleCard;