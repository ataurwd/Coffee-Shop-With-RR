import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../components/SingleCard';

const Coffees = () => {
    const data = useLoaderData()
    const [coffee, setCoffee] = useState(data);
    const handelSort = sortBy => {
        if(sortBy){
            if(sortBy == 'popularity'){
                const sortedData = [...data].sort((a, b) => b.popularity - a.popularity)
                setCoffee(sortedData)
            }
            else if(sortBy == 'rating'){
                const sortedData = [...data].sort((a, b) => b.rating - a.rating)
                setCoffee(sortedData)
            }
        }
    }
    return (
        <div>
            <div className='my-10 flex justify-between items-center'>
                <div>
                <h1>Sort Coffee&#39;s by Popularity & Rating &rarr;</h1>
                </div>
                <div className='space-x-4'>
                    <button className='btn btn-md bg-yellow-400' onClick={() => handelSort('popularity')}>Sort Bu Popularity</button>
                    <button className='btn btn-md bg-yellow-400'  onClick={() => handelSort('rating')}>Sort By Rating</button>
                </div>
            </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mb-10 md:mb-10 mb-5'>
                    {
                        coffee.map( coffee => <SingleCard key={coffee.id} coffee ={coffee}/>)
                    }
        </div>
        </div>
    );
};

export default Coffees;