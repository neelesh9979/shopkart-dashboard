import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Register = () =>{
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Vendor State
    const [shopName, setShopName] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        {email !=='' ? setEmailError(false) : setEmailError(true)}
        {password !=='' ? setPasswordError(false) : setPasswordError(true)}
        if (email !== '' && password !== '') {
            setLoading(true);
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
                if(data.status === true){
                    setLoginStatus(()=> userLoginStatus(data.status,data.message));
                    setLoading(false);
                }else{
                    setLoginStatus(()=> userLoginStatus(data.status,data.message));
                    setLoading(false)
                }
            } catch (error) {
                // Handle error
                setLoading(false);
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
        }
    };
    const userLoginStatus = (status,message) => {
        if(status === true){
            return(
                <>
                <div className="alert alert-success p-2">
                 {message}
                </div>
                </>
            );
        }else{
            return(
                <>
                <div className="alert alert-danger p-2">
                    {message}
                </div>
                </>
            );
        }
    }
    const loader = () =>{
        return(
            <>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span className="sr-only">Please Wait...</span>
            </>
        );
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return(
        <>
            <div className="login-page vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-card bg-white rounded-3 p-5">
                                <div className="text-center p-5">
                                    <img src="./images/shopkart.png" className="logo" />
                                </div>
                                <div className="text-center mb-5">
                                    <h3>Register As Vendor</h3>
                                    <p className="text-secondary">Welcome back! Please enter your details</p>
                                </div>
                                <form onSubmit={handleSubmit} className="">
                                    <div className="row mb-2">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-1 text-secondary fs-6" htmlFor="exampleInputEmail1">First Name</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    name="fname" 
                                                    value={fname}
                                                    onChange={(e) =>{
                                                        setFname(e.target.value)
                                                    } }
                                                    onKeyDown={handleKeyDown}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-1 text-secondary fs-6" htmlFor="exampleInputEmail1">Last Name</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    name="lname" 
                                                    value={lname}
                                                    onChange={(e) =>{
                                                        setLname(e.target.value)
                                                    } }
                                                    onKeyDown={handleKeyDown}
                                                />
                                                <div className="invalid-feedback">Please enter registered email or phone number.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 text-secondary fs-6" htmlFor="exampleInputEmail1">Email or Phone number</label>
                                        <input 
                                            type="text" 
                                            className={emailError ? 'is-invalid form-control ' : 'form-control'} 
                                            name="emailorphone" 
                                            value={email}
                                            onChange={(e) =>{
                                                setEmail(e.target.value)
                                                {email !=='' ? setEmailError(false) : setEmailError(true)}
                                            } }
                                            onKeyDown={handleKeyDown}
                                        />
                                        <div className="invalid-feedback">Please enter registered email or phone number.</div>
                                    </div>
                                    <div className="form-group has-validation my-3 pb-1">
                                        <label className="mb-1 text-secondary fs-6" htmlFor="exampleInputPassword1">Password</label>
                                        <div className="input-group">
                                            <input 
                                                type={showPassword ? 'text' : 'password'}
                                                className={passwordError ? 'is-invalid form-control ' : 'form-control'}
                                                name="password"
                                                value={password}
                                                onChange={(e)=>{
                                                    setPassword(e.target.value)
                                                    {password !=='' ? setPasswordError(false) : setPasswordError(true)}
                                                }}
                                                onKeyDown={handleKeyDown}
                                            />     
                                            <div className="input-group-append">
                                                <span className="input-group-text" onClick={togglePasswordVisibility}>
                                                    <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
                                                </span>
                                            </div>
                                        </div>                             
                                        <div className="invalid-feedback">Please enter password.</div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="mb-1 text-secondary fs-6" htmlFor="exampleInputEmail1">Your Shop Name</label>
                                        <input 
                                            type="text" 
                                            className='form-control' 
                                            name="shopName" 
                                            value={shopName}
                                            onChange={(e) =>{
                                                setShopName(e.target.value)
                                            } }
                                        />
                                    </div>
                                    <div className="row mb-2">
                                        <div class="col-md-6">
                                            <div className="form-group">
                                                <label for="formFileSm" class="mb-1 text-secondary fs-6">Add Your Profile Pic</label>
                                                <input class="form-control form-control-sm" id="formFileSm" type="file" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div className="form-group">
                                                <label for="formFileSm" class="mb-1 text-secondary fs-6">Add Your Shop Image</label>
                                                <input class="form-control form-control-sm" id="formFileSm" type="file" />
                                            </div>
                                        </div>
                                    </div>
                                    {loginStatus !== ''? loginStatus : ''}
                                    <button type="submit" className="btn btn-primary w-100">
                                        {loading == true ? loader() : 'Register'}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-detail p-5 rounded-3 text-center bg-primary h-100">
                                <h3 className="pb-2 text-white fs-1">Welcome back! Please sign in to your ShopKart account</h3>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur. Faccilisi neque lects turpis id tincidunt eget. Sagittis id et cursus porttitor.</p>
                                <div className="text-center p-2">
                                    <img src="./images/stepImg.png" className="step-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
