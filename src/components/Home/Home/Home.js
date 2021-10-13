import React from 'react';
import Appointment from '../Appointment/Appointment';
import Care from '../Care/Care';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Care></Care>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;