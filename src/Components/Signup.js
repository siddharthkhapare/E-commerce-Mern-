import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import './css/LoginSignup.css';
import { withRouter, Link } from 'react-router-dom';


function Signup(props) {


    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phoneno: '',
            email: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            axios.post('http://localhost:9000/signup', values)
                .then(function (response) {

                    console.log(response);

                    if (!response.data.emailExist) {

                        Swal.fire({
                            title: 'You got registered',
                            text: 'Go to login?',
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'Ok',
                            cancelButtonText: 'Cancel'
                        }).then((result) => {
                            if (result.value) {
                                props.history.push('/login')

                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                props.history.push('/signup')
                                resetForm({ values: '' })
                            }
                        });
                    } else {
                        alert('user already exist...try logging in');
                        props.history.push('/login');
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        validate: values => {

            let errors = {

            };
            if (!values.firstname) {
                errors.firstname = 'Required'
            } else if (!/^[A-Za-z]+$/.test(values.firstname)) {
                errors.firstname = 'Enter a valid firstname'
            }

            if (!values.lastname) {
                errors.lastname = 'Required'
            } else if (!/^[A-Za-z]+$/.test(values.lastname)) {
                errors.lastname = 'Enter a valid lastname'
            }

            if (!values.phoneno) {
                errors.phoneno = 'Required'
            } else if (!/^\d{10}$/.test(values.phoneno)) {
                errors.phoneno = 'Enter a valid phoneno'
            }

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
                errors.email = 'Invalid email format'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(values.password)) {
                errors.password = 'must contain least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
            }
            return errors
        }

    })


    return (
        <div class="signup bg-primary">
            <div className="container">

                <div className="card col-xs-12 col-md-6 ">

                    <form className="p-0" onSubmit={formik.handleSubmit} >
                        <div className="row">
                            <h1 className="col-10 pl-4">Signup</h1>
                            <Link to="/"><i className="fa fa-window-close col-2 text-danger ml-4"></i></Link>
                        </div>

                        <div className="form-group pt-3 px-3">
                            <label className="labelcolor">Firstname</label>
                            <input type="text"
                                value={formik.values.firstname}
                                name="firstname"
                                className="form-control"
                                id="exampleInputfirstname"
                                placeholder="Enter Firstname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />
                                {formik.touched.firstname && formik.errors.firstname ? <div className="text-danger">{formik.errors.firstname}</div> : null}
                            
                        </div>

                        <div className="form-group px-3">
                            <label className="labelcolor">Lastname</label>
                            <input type="text"
                                value={formik.values.lastname}
                                name="lastname"
                                className="form-control"
                                id="exampleInputLastname"
                                placeholder="Enter Lastname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />

                            {formik.touched.lastname && formik.errors.lastname ? <div className="text-danger ">{formik.errors.lastname}</div> : null}
                        </div>
                        <div className="form-group px-3">
                            <label className="labelcolor">Mobile</label>
                            <input type="Integer"
                                value={formik.values.phoneno}
                                name="phoneno"
                                className="form-control"
                                id="exampleInputMobile"
                                placeholder="Enter Mobile"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />

                            {formik.touched.phoneno && formik.errors.phoneno ? <div className="text-danger ">{formik.errors.phoneno}</div> : null}
                        </div>
                        <div className="form-group px-3">
                            <label className="labelcolor">Email address</label>
                            <input type="email"
                                value={formik.values.email}
                                className="form-control"
                                name="email"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />

                            {formik.touched.email && formik.errors.email ? <div className="text-danger ">{formik.errors.email}</div> : null}
                        </div>
                        <div className="form-group px-3">
                            <label className="labelcolor">Password</label>
                            <input type="password"
                                value={formik.values.password}
                                name="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange} />

                            {formik.touched.password && formik.errors.password ? <div className="text-danger ">{formik.errors.password}</div> : null}
                        </div>


                    <div class="mb-3">

                        <Button type="submit" className=" btncolor mx-3">Submit</Button>
                        <label className="mt-3 label">Already a user?
                                <span>
                                <Link className="linkcolor ml-1 " to="/login">login</Link>
                            </span>

                        </label>
                    </div>


                    </form>


                </div>
            </div>
        </div>

    )
}

export default withRouter(Signup);