import {getDataFromToken} from '@/helpers/getDataFromToken'
import User from "@/models/userModel";
import {NextResponse,NextRequest} from "next/server";
import {connect} from '@/dbConfig/dbConfig'

connect()

export async function GET(request:NextRequest){
    try{
        const userId = await getDataFromToken(request)
        let user = await User.findOne({_id:userId}).select("-password")
        return NextResponse.json({
            message:"user found",
            data: user
        })
    }catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}

