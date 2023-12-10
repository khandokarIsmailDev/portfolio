'use client'
import React, {useState} from 'react';
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
    const router = useRouter()
    const Logout =async () =>{

        try {
            await axios.get('/api/users/logout')
            toast.success("Successfully Logout")
            router.push('/login')
        }catch(error:any){
            console.log(error.message)
            toast.error('Something is wrong')
        }
    }

    const [data,setData] = useState("nothing")
    const getUserDetail = async () =>{
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }

    return (
        <div className=" w-100 text-center my-5 py-5">
            <h1 className="d-block text-center w-100">Profile page</h1>
            <h2>{data === 'nothing' ? 'Nothing' : <Link href={`/profile/${data}`}>
                {data}
            </Link>}</h2>
            <button onClick={getUserDetail} className="btn btn-success mt-5"> Get user detail</button> <br/>
            <button  onClick={Logout} className="btn btn-primary fw-medium top-image-search-shadow text-white my-3">Logout</button>
        </div>
    );
};

export default Page;