import React from 'react';
import AdminLayout from '../layout/AdminLayout';
import AdSlide from '../components/adSlide';
import Services from '../components/Services';
import Temoignage from '../components/Temoignage';

const AdminHome = () => {
    return (
        <div>
            <AdminLayout/>
            <AdSlide/>
            <Services />
            <Temoignage />
        </div>
    );
};

export default AdminHome;