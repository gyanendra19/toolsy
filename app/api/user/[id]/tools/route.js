import Tool from "@models/toolModel";
import { connectToDB } from "@utils/database";

export const GET = async(req, {params}) => {
    console.log(params.id);
    try{
        await connectToDB()
        const userTools = await Tool.find({creator: params.id}).populate('creator')

        return new Response(JSON.stringify(userTools), {status: 200})
    }catch(error){
        return new Response('Failed to fetch Tools', {status: 500})
    }
}