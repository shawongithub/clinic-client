import React from 'react';
import flourideImage from '../../../images/flouride.png'
import cavityImage from '../../../images/cavity.png'
import whiteningImage from '../../../images/whitening.png'
import ServiceCard from './ServiceCard/ServiceCard';
const serviceData = [
    {
        id: '1',
        name: 'Flouride Treatment',
        description: 'No dummy text no more. No dummy text no more. No dummy text no more. No dummy text no more',
        image: flourideImage
    },
    {
        id: '2',
        name: 'Cavity Filling',
        description: 'No dummy text no more. No dummy text no more. No dummy text no more. No dummy text no more',
        image: cavityImage
    },
    {
        id: '1',
        name: 'Teeth Whitening',
        description: 'No dummy text no more. No dummy text no more. No dummy text no more. No dummy text no more',
        image: whiteningImage
    }
]
const Service = () => {
    return (
        <section className="text-center mt-5">
            <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
            <h2 style={{ color: '#3A4256' }}>Services We Provide</h2>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <div className="row w-75">
                    {
                        serviceData.map(service => <ServiceCard service={service} key={service.id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;