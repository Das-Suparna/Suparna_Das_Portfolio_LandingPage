import React from 'react';

function Contact() {
    return (
        <div className="container "><br />
            <h4 className=" text-center text-primary">CONTACT ME</h4>

            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <div className="card p-4 ">
                        <h4 className="text-center ">Send a Message</h4><br />
                        <form>
                            <div className="form-group ">
                                Name <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                            </div><br />
                            <div className="form-group ">
                                Email <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                            </div><br />
                            <div className="form-group ">
                                Contact No <input type="number" className="form-control" id="contact" placeholder="Your Contact No" required />
                            </div><br />
                            <div className="form-group ">
                                Message <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                            </div><br />
                            <button type="submit" className="btn btn-primary w-100">Send</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center card">
                    <img style={{ height: '550px' }} src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?t=st=1745565064~exp=1745568664~hmac=866801071ca1d2156bc5de261eb7012b05a4b783c3ea8f2cd19100d3421a61f4&w=826"
                    ></img>

                </div>

                <div style={{ height: '100px' }}></div>
            </div>
        </div>
    );
}

export default Contact;
