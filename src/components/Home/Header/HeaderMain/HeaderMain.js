import React from 'react';
import chairImage from '../../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br />Starts Here</h1>
                <p className="text-muted">some dummy text here. nothing to mean. I need to struggle a lot. thing is that its much more clear</p>
                <button className="btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chairImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;