import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log('Hello Submit');
        try {
            const response = await fetch('https://fun-cougar-precisely.ngrok-free.app/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    'emailOrMobile':email,
                    'password': password
                }),
            });
            const data = await response.json();
            console.log('Vendor Login',data.message);
        } catch (error) {
            
        }
    }
    return(
        <>
            <div className="login-page vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-card bg-white rounded-3 p-5">
                                <div className="text-center mb-5">
                                    <h3>Sign in</h3>
                                    <p className="text-secondary">Welcome back! Please enter your details</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="mb-1 text-secondary fs-6" for="exampleInputEmail1">Email</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter email or phone number."
                                            name="emailorphone" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div className="form-group has-validation my-3 pb-1">
                                        <label className="mb-1 text-secondary fs-6" for="exampleInputPassword1">Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password" 
                                            name="password"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Sign in</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-detail p-5 rounded-3 text-center bg-primary h-100">
                                <h3 className="pb-2 text-white fs-1">Welcome back! Please sign in to your Shop cart account</h3>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Faccilisi neque lects turpis id tincidunt eget. Sagittis id et cursus porttitor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;