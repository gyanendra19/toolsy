import Tool from "@models/toolModel"
import { connectToDB } from "@utils/database"

export const POST = async (req, res) => {
    const { userId, tool1, link1, tool2, link2, tool3, link3, tool4, link4, tags } = await req.json()
    console.log(userId, tool1, link1);
    try {
        await connectToDB()
        const newTool = await Tool.create({
            creator: userId,
            tool1,
            link1,
            tool2,
            link2,
            tool3,
            link3,
            tool4,
            link4,
            tags
        })

        return new Response(JSON.stringify(newTool), {status: 201})
    } catch (error) {
        console.log(error);
        return new Response('could not create', {status: 500})
    }
}