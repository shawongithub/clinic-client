import React from 'react';
import './Appointment.css'
import appointmentImage from '../../../images/appointment.png'
const Appointment = () => {
    return (
        <section className="appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={appointmentImage} alt="" />
                    </div>
                    <div className="col-md-7 text-white">
                        <h5 className="text-primary" >APPOINTMENT</h5>
                        <h1 className="my-4">Make an Appointment <br /> Today</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam atque laboriosam sed dolorum, nisi eaque tempore repudiandae itaque magnam impedit consequuntur voluptatem inventore asperiores quia modi eius. Culpa, omnis quo!
                            Nihil non nulla, libero excepturi quod ratione deleniti molestias inventore ea nisi veritatis doloremque itaque deserunt sint laudantium? Temporibus, enim.
                        </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Appointment;