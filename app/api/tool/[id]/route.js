import Tool from "@models/toolModel"
import { connectToDB } from "@utils/database"

export const GET = async (req, {params}) => {
    try{
        await connectToDB()

        const tool = await Tool.find({_id: params.id}).populate('creator')

        return new Response(JSON.stringify(tool), {status: 200})
    }catch(error){
        return new Response('Fetch failed', {status: 500})
    }
}



export const PATCH = async (req, {params}) => {
    const { tool1, link1, tool2, link2, tool3, link3, tool4, link4, tags } = await req.json()
    try{
        await connectToDB()

        const existingTool = await Tool.findById(params.id).populate('creator')

        if(!existingTool) return new Response('Prompt not found', {status: 404})

        existingTool.tool1 = tool1
        existingTool.tool2 = tool2
        existingTool.tool3 = tool3
        existingTool.tool4 = tool4
        existingTool.link1 = link1
        existingTool.link2 = link2
        existingTool.link3 = link3
        existingTool.link4 = link4
        existingTool.tags = tags

        await existingTool.save()

        return new Response('Tools Updated', {status: 200})
    }catch(error){
        return new Response('Fetch failed', {status: 500})
    }
}

export const DELETE = async (req, {params}) => {
    try{
        await connectToDB()

        await Tool.findByIdAndDelete(params.id)

        return new Response('Tool deleted', {status: 200})
    }catch(error){
        return new Response('Fetch failed', {status: 500})
    }
}