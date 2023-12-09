'use client'
import React, {useEffect} from 'react';
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
    const router = useRouter()

    const [user,setUser] = useState({email:"",password:""})
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false)
    const onLogin = async () =>{
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login",user)
            console.log(response.data)
            toast.success('User Login Successfully')
            router.push('/profile')
        }catch (error:any){
            console.log(error.message)
            toast.error('user or password dont match')
        }finally {
            setLoading(false)
        }
    }


    useEffect(()=>{
       if(user.email.length > 0 && user.password.length > 0){
           setButtonDisabled(false)
       } else{
           setButtonDisabled(true)
       }
    },[user])



    return (
        <section id="login" className="vh-100s">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">{loading?'Processing':'Login'}</h2>
                                    <p className="text-white-50 mb-5">
                                        Please enter your login and password!
                                    </p>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="typeEmailX"
                                            className="form-control form-control-lg"
                                            value={user.email}
                                            onChange={e=>setUser({...user,email: e.target.value})}
                                        />
                                        <label className="form-label" htmlFor="typeEmailX">
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                            value={user.password}
                                            onChange={e=>setUser({...user,password: e.target.value})}
                                        />
                                        <label className="form-label" htmlFor="typePasswordX">
                                            Password
                                        </label>
                                    </div>
                                    <p className="small mb-5 pb-lg-2">
                                        <a className="text-white-50" href="#!">
                                            Forgot password?
                                        </a>
                                    </p>
                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                        onClick={onLogin}
                                    >
                                        {buttonDisabled ? "No login" : 'Login'}
                                    </button>
                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white">
                                            <i className="fab fa-facebook-f fa-lg" />
                                        </a>
                                        <a href="#!" className="text-white">
                                            <i className="fab fa-twitter fa-lg mx-4 px-2" />
                                        </a>
                                        <a href="#!" className="text-white">
                                            <i className="fab fa-google fa-lg" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        Dont have an account?{" "}
                                        <Link href={'/signup'} className="text-white-50 fw-bold">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;