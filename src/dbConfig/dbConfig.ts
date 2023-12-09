import mongoose from 'mongoose'

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)                // ! aita dite hobe , coz typescript jane na, ai variable asi ki nai. name MONGO_URI dite hobe
        const connection = mongoose.connection
        connection.on('connected',()=>{
            console.log('Mongodb connected successfully  ')
        })

        connection.on('error',(err)=>{
            console.log(`Mongodb is a error. pls make sure all is running ${err}`)
            process.exit()
        })
    }catch (error){
        console.log(`Something is Wrong`)
        console.log(error)
    }
}

