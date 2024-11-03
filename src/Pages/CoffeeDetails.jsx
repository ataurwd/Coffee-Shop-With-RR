import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addFavorites, getAllData } from '../utils/localStorage';

const CoffeeDetails = () => {
    const coffeeData = useLoaderData()
    const {id} = useParams()
    const [data, setData] = useState({})
    const [ isActive, setIsActive] = useState(false)


    useEffect(() => {
        
    const findBook = coffeeData.find(d => d.id === Number(id))    
    setData(findBook)
    const favorite = getAllData()
    const ixExist = favorite.find( data => data.id === coffeeData.id)
    if(ixExist){
        setIsActive(true)
    }
    }, [coffeeData, id])

    const {name, origin, image, category,type, rating, popularity} = data; 


    // handel then pavorite btn
    const handleFavorite = (coffee) => {
        // your favorite logic here
        addFavorites(coffee)
        setIsActive(true)
    }    
    return (
        <div>
            <div className="flex relative">
            <div className="shadow-xl rounded-xl overflow-hidden" >
            <figure className="w-full overflow-hidden">
            <img  src={image} alt=""/>
            </figure>
            <div className="p-4">
                <h1 className="text-xl">{name}</h1>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popular: {popularity}</p>
                <Link disabled={isActive} className='btn btn-success' onClick={() => handleFavorite(data)}>Add Favorite</Link>
                </div></div>
            </div>
        </div>
    );
};

export default CoffeeDetails;