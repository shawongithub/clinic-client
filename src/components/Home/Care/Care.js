import React from 'react';
import careImage from '../../../images/care.png'
const Care = () => {
    return (
        <section className="row mt-5 pt-5 ">
            <div style={{ height: '400px' }} className="col-md-4 offset-md-1">
                <img src={careImage} alt="" className="image-fluid w-100 h-100" />
            </div>
            <div className="col-md-5">
                <h2>Exception Dental<br />Care On Your Terms</h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste odit modi similique magni quibusdam porro accusantium. Enim nostrum corporis debitis itaque ipsa adipisci aliquid voluptas expedita. Laudantium, deserunt quo.
                    In harum nam accusamus eveniet eligendi amet est laudantium dolore corrupti eos iusto iure fugit tempore quia dicta rem ipsum odio deleniti voluptatibus, excepturi iste culpa reiciendis qui sint. Commodi!
                    eaque aliquid vero voluptates facere exercitationem officiis. Eum, molestias sunt!
                </p>
                <button className="btn-primary">Learn More</button>
            </div>
        </section>
    );
};

export default Care;