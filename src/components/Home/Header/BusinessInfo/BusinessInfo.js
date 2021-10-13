import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import { faCoffee, faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        'id': '1',
        title: 'Opening Hours',
        description: 'Our office opens at 9am',
        icon: faClock,
        background: 'primary'
    },
    {
        'id': '2',
        title: 'Visit Our Location',
        description: 'GCE, Nasirabad, Chittagong',
        icon: faMapMarker,
        background: 'secondary'
    },
    {
        'id': '3',
        title: 'Contact Us',
        description: '+8801710000000',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info} key={info.id}></InfoCard>)
                }
            </div>

        </section>
    );
};

export default BusinessInfo;