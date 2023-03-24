import React from 'react';
import Meals from '../../components/meals/Meals';
import Summary from '../../components/summary/Summary';

const MealsPage = () => {
    return (
        <div>
            <Summary/>
            <Meals/>
        </div>
    );
};

export default MealsPage;