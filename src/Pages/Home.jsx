import React from 'react';
import Hbanner from '../components/Hbanner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categorys from '../components/Categorys';

const Home = () => {
    const categorysData = useLoaderData()    
    return (
        <div>
            <Hbanner/>
            <Heading
             title="Browse Coffees by Category"
             subTitle="Whether you’re craving a classic espresso, a creamy latte, or a slow-brewed pour-over, our passion is to deliver an unforgettable coffee experience, one sip at a time. Join us and explore the art of coffee in every delightful cup."
             />
            <Categorys categorysData={categorysData}/>
            <Outlet/>
        </div>
    );
};

export default Home;