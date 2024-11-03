import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllData, removeFavorites } from '../utils/localStorage';
import SingleCard from '../components/SingleCard';

const Dashboard = () => {    
    const [data, setData] = useState([]);
    useEffect(() => {
        const cardData = getAllData()
        setData(cardData)
    }, [])
    const removeItemHandel = (id) => {
        removeFavorites(id)
        setData(data.filter(item => item.id!== id))
    }
    return (
        <div>
           <Heading title="Welcome to Dashboard"
           subTitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
           />
                   <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mb-10 md:mb-10 mb-5'>
                    {
                        data.map( coffee => (
                         <div  key={coffee.id} className='relative'>
                               <SingleCard coffee ={coffee} removeItemHandel={removeItemHandel}/>
                         </div>
                        )
                        )
                       
                    }
        </div>
        </div>
    );
};

export default Dashboard;