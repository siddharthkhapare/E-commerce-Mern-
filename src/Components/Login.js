import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';

import './css/LoginSignup.css'
import axios from 'axios'



const Login = () => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {


            axios.post('http://localhost:9000/login', values)
                .then(res => {
                    // console.log('status 200', res)



                    // window.sessionStorage.set

                    if (res.data.status) {
                        window.sessionStorage.setItem("token", res.data.token);
                        window.sessionStorage.setItem("LoggedIn", res.data.isLoggedIn);
                        window.sessionStorage.setItem("firstname", res.data.user.firstname);
                        window.sessionStorage.setItem("lastname", res.data.user.lastname);
                        window.sessionStorage.setItem("email", res.data.user.email);

                        window.location.href = '/';
                        window.sessionStorage.setItem("user_id", res.data.user._id);
                        const user_id = window.sessionStorage.getItem("user_id");
                        console.log(user_id);
                        


                    } else {
                        alert(res.data.msg);
                        window.location.href = '/login';
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert(err);
                })
        },

        validate: values => {

            let errors = {

            };

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
        <div className="login bg-primary">
            <Container className="col-sm-10 col-md-6 bg-light ">

                <Form className="mx-4" onSubmit={formik.handleSubmit} >

                    <div className="row">
                        <h1 className="col-10 col-md-11">Login</h1>
                        <Link to="/"><i className="fa fa-window-close col-2 col-md-1 text-danger"></i></Link>
                    </div>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="labelcolor">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={formik.values.email}
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} />
                        {formik.touched.email && formik.errors.email ? <div className="text-danger ">{formik.errors.email}</div> : null}
                    </Form.Group>



                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="labelcolor">Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            value={formik.values.password}
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password ? <div className="text-danger ">{formik.errors.password}</div> : null}
                    </Form.Group>


                    <Button type="submit" className="mb-3 btncolor">Login</Button>
                    <label className="ml-2 label">new user?
                                <span>
                            <Link className="linkcolor ml-1" to="/signup">signup</Link>
                        </span>

                    </label>

                </Form>
            </Container>

        </div>
    );
}
export default Login