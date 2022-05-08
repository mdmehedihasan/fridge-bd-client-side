import React from 'react';
import Banner from './Banner/Banner';
import FAQ from './FAQ/FAQ';
import FeatureItem from './FeatureItem/FeatureItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureItem></FeatureItem>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;