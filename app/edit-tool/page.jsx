'use client'
import Form from '@components/Form'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const page = () => {
  const [tool, setTool] = useState({})
  const router = useRouter()
  const searchParams = useSearchParams()
  const toolId = searchParams.get('id')
  console.log(toolId);


  useEffect(() => {
    const getEditTool = async() => {
      const res = await axios({
        method: 'GET',
        url: `api/tool/${toolId}`
      })

      setTool(res.data[0])
    }

    if(toolId) getEditTool()
  }, [toolId])

  const updateTool = async(e) => {
    e.preventDefault()
    try{

      const res = await fetch(`/api/tool/${toolId}`,{
        method: 'PATCH',
        body: JSON.stringify({
            tool1: tool.tool1,
            link1: tool.link1,
            tool2: tool.tool2,
            link2: tool.link2,
            tool3: tool.tool3,
            link3: tool.link3,
            tool4: tool.tool4,
            link4: tool.link4,
            tags: tool.tags
          })
      })

      console.log(res);
      if (res.ok) {
        router.push('/')
    }

    }catch(error){
      console.log(error);
    }

  }

  return (
   <Form
   handleSubmit={updateTool}
   setTools={setTool}
   tools = {tool}
   type = {'Edit'}
   />
  )
}

export default page