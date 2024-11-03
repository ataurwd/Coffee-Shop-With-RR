import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import SingleCard from './SingleCard';

const CoffeeCard = () => {
    const [data, setData] = useState([]);
    const {id} = useParams()
    const coffeeData = useLoaderData()
    

    useEffect(() => {
        if(id){
            const newData = [...coffeeData].filter(coffee => coffee.category === id)
            setData(newData)
        }
        else{
            setData(coffeeData.slice(0, 6))
        }

    }, [coffeeData, id])
            
    const navigate = useNavigate()
    //view all btn

    return (
        <div className='my-14'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mb-10 md:mb-10 mb-5'>
                    {
                        data.map( coffee => <SingleCard key={coffee.id} coffee={coffee}/>)
                    }
                </div>
                <button className='btn btn-sm btn-success text-white' onClick={() => navigate('/coffees')}>View All</button>
        </div>
    );
};

export default CoffeeCard;