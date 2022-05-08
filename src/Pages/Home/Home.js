import React from 'react';
import Banner from './Banner/Banner';
import FAQ from './FAQ/FAQ';
import FeatureItem from './FeatureItem/FeatureItem';
import Inventories from './Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <FeatureItem></FeatureItem>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;