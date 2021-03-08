import React,{ useState } from 'react';
import axios from 'axios';
import './css/LoginSignup.css'



function AdminLogin() {


    const [errMessage, seterrMessage] = useState('');
    const [loginStatus, setloginStatus] = useState('');


    const login = (e) => {

        e.preventDefault();
        let request = {
            username: document.getElementById('exampleInputEmail1').value,
            password: document.getElementById('exampleInputPassword1').value
        }

      

        axios.post('http://localhost:9000/admin', request)
        
            .then(res => {
                console.log('status 200', res)
                seterrMessage(res.data.message);
                setloginStatus(res.data.isLoggedIn);

                window.sessionStorage.setItem("isLoggedIn", res.data.isLoggedIn);
    
                if (res.data.status) {                
                    window.location.href = '/ViewProducts';
                } else {
                    window.location.href = '/admin';
                }
            })
            .catch(err => {
                console.log(err);
            })
            
    }


    return (

        <div className="adminLogin ">
            <div className="container">
                <h2 className="text-center mb-4">Admin Login</h2>

                <form className="col-md-4 mx-auto bg-light p-3" onSubmit={(e) => login(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        {loginStatus ? null : <small className="text-danger">{errMessage}</small>}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    );
}


export default AdminLogin