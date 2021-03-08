import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import '../css/Contactus/Contactus.css';
import Header from '../Header';
import Footer from '../Footer';
import Axios from "axios";


function Contactus(props) {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        onSubmit: (values, { resetForm }) => {        
       
            Axios.post('http://localhost:9000/api/sendmail',values)
            .then(res=> {
                console.log(res);
                if(res.status){
                    alert('message has been sent');
                    resetForm({ values: '' });
                }else{
                    console.log('message not sent');
                }
            })
            .catch(err =>{
                console.log(err);
            });

        },
        validate: values => {

            let errors = {

            };
            if (!values.name) {
                errors.name = 'Required'
            } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
                errors.name = 'Enter a valid name'
            }

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
                errors.email = 'Invalid email format'
            }

            if (!values.phone) {
                errors.phone = 'Required'
            } else if (!/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(values.phone)) {
                errors.phone = 'Enter a valid phone'
            }

            if (!values.subject) {
                errors.subject = 'Required'
            } else if (!/^[a-zA-Z\s]+$/.test(values.subject)) {
                errors.subject = 'Enter a valid subject'
            }

            if (!values.message) {
                errors.message = 'Required'
            } else if (!/^[a-zA-Z\s]+$/.test(values.message)) {
                errors.message = 'Enter a valid message'
            }

            
            return errors
        }

    });



    return (
        <Fragment>
            <Header />

            <div className="contactusParallax">
                <h1>Contact us</h1>
                <div className="color-overlay"></div>
            </div>



            <div className="contactus">
               
                    <div className="row">

                        <div className="bg-image col-12 col-md-5">

                        </div>
                        <div className="contactForm col-12 col-md-7">

                            <h4 className="text-left">We're open for any suggestion or just to have a chat or enquiry</h4>

                            <div className="row details">
                                <div className="address col-4">
                                    <h5 className="text-capitalize"> <i class="fa fa-map-marker pr-2"></i>
                                    address :</h5>
                                    <p className="text-left pr-3">1229 Bagal Chowk Kolhapur</p>
                                </div>

                                <div className="email col-4">
                                    <h5 className="text-capitalize">
                                    <i class="fa fa-paper-plane pr-2"></i>email :</h5>
                                    <p className="text-left pr-3 mail">company@ gmail.com</p>
                                </div>

                                <div className="phone col-4">
                                    <h5 className="text-capitalize">
                                    <i class="fa fa-phone pr-2"></i>phone :</h5>
                                    <p className="text-left pr-3">+91 9********9</p>
                                </div>
                            </div>


                            <form className="row" onSubmit={formik.handleSubmit}>
                                <div class="col-md-6">
                                    <div className="mb-3">
                                        <input placeholder="Name" 
                                        type="text" 
                                        value={formik.values.name}
                                        name="name"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange} 
                                        className="form-control" 
                                        id="exampleInputName"
                                        aria-describedby="nameHelp" />

                                        {formik.touched.name && formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div className="mb-3">

                                        <input placeholder="Email Address" 
                                        type="email" 
                                        value={formik.values.email}
                                        name="email"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className="form-control" 
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                        {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div className="mb-3">

                                        <input placeholder="Phone number" 
                                        type="text" 
                                        value={formik.values.phone}
                                        name="phone"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className="form-control" 
                                        id="exampleInputPhone"
                                        aria-describedby="phoneHelp" />
                                         {formik.touched.phone && formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div> : null} 
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div className="mb-3">

                                        <input placeholder="Subject" 
                                        type="text" 
                                        value={formik.values.subject}
                                        name="subject"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className="form-control" 
                                        id="exampleInputSubject"
                                        aria-describedby="subjectHelp" />
                                        {formik.touched.subject && formik.errors.subject ? <div className="text-danger">{formik.errors.subject}</div> : null} 

                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div class="mb-3">
                                        <textarea placeholder="Type your message here..." 
                                        class="form-control" 
                                        value={formik.values.message}
                                        name="message"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        id="exampleFormControlTextarea1" 
                                        rows="4">                                        
                                        </textarea>
                                        {formik.touched.message && formik.errors.message ? <div className="text-danger">{formik.errors.message}</div> : null} 
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <button type="submit" className="btn mb-5 text-capitalize">send message</button>
                                </div>

                            </form>


                            <p className="text-capitalize mb-1 follow">follow us here </p>

                            <p className="icons"><i class="fa fa-google pr-3"></i>
                                <i class="fa fa-instagram pr-3"></i>
                                <i class="fa fa-facebook pr-3"></i>
                                <i class="fa fa-twitter"></i>
                            </p>

                        </div>
                    </div>
                
            </div>

            <Footer />
        </Fragment>
    )
}

export default Contactus
