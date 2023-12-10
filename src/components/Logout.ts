'use client'
import toast from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";

export async function Logout (){

    const route = useRouter()

    try {
        await axios.get('/api/users/logout')
        toast.success("Successfully Logout")
        route.push('/login')
    }catch(error:any){
        console.log(error.message)
        toast.error('Something is wrong')
    }
}