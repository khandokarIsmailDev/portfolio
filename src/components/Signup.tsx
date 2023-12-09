'use client'
import React, {useEffect} from 'react';
import Link from "next/link";
import {useState} from "react";
import {useRouter} from 'next/navigation'
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
    const router = useRouter()
    let [user,setUser] = useState({username:"",email:"",password:""})
    let [buttonDisabled,setButtonDisabled] = useState(false)
    let [loading,setLoading] = useState(false)
    const onSignup =async () =>{
        try {
            setLoading(true)
            const res = await axios.post("/api/users/signup",user)
            console.log(`successfully data created ${res.data}`)
            toast.success('user created successfully')
            router.push('/login')
        }catch (error:any){
            toast.error("username and email must be uinque")
            console.log('here is error '+error.message)
        }finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(user.username.length>0 && user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user])



    return (
        <section id="register" className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 ">
                                    <h2 className="fw-bold mb-2 text-uppercase">{loading ? "Processing":"Signup"}</h2>
                                    <p className="text-white-50 mb-5">
                                        Please fill up this all field
                                    </p>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="text"
                                            id="username"
                                            className="form-control form-control-lg"
                                            value={user.username}
                                            onChange={(e)=> setUser({...user,username:e.target.value})}
                                        />
                                        <label className="form-label" htmlFor="typeEmailX">
                                            Name
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control form-control-lg"
                                            value={user.email}
                                            onChange={e=>setUser({...user,email:e.target.value})}
                                        />
                                        <label className="form-label" htmlFor="typePasswordX">
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control form-control-lg"
                                            value={user.password}
                                            onChange={e=>setUser({...user,password: e.target.value})}
                                        />
                                        <label className="form-label" htmlFor="typePasswordX">
                                            Password
                                        </label>
                                    </div>
                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                        onClick={onSignup}
                                    >
                                        {buttonDisabled ? "No Signup" : 'Signup'}
                                        {/*Signup*/}
                                    </button>

                                </div>
                                <div>
                                    <p className="mb-0">
                                        Do have an account?{" "}
                                        <Link href={'/login'} className="text-white-50 fw-bold">
                                            Login
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

export default Signup;


