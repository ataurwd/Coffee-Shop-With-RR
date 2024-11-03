import React from 'react';
import { NavLink } from 'react-router-dom';

const Categorys = ({categorysData}) => {
    return (
        <div role="tablist" className="tabs tabs-lifted my-10">
            {
                categorysData.map((category) => (
                    <NavLink key={category.id} role="tab" className={({isActive}) =>`tab ${isActive ? 'tab-active' : ''}` } to={`/card/${category.category}`}>
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Categorys;