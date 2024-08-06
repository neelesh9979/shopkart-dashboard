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
            <div className="login-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter email or phone number."
                                        name="emailorphone" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        name="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;