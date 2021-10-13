import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 p-1">
            <div className={`d-flex info-${info.background} text-white info-container`}>
                <div className="info-icon me-3">
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;