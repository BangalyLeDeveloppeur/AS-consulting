import React from 'react';
import AdSlide from '../components/adSlide';
import Services from '../components/Services';
import Temoignage from '../components/Temoignage';

const AdminHome = () => {
    return (
        <div>
            <AdSlide/>
            <Services />
            <Temoignage />
        </div>
    );
};

export default AdminHome;