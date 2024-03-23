import Tool from "@models/toolModel"
import { connectToDB } from "@utils/database"

export const GET = async(req, res) => {
    try{
        await connectToDB()

        const allTools = await Tool.find({}).populate('creator')

        return new Response( JSON.stringify(allTools), {status: 200})
    }catch(error){
        return new Response('Unable to fetch all tools', {status: 200})
    }
}