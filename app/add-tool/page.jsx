'use client'
import Form from '@components/Form'
import { Alert } from '@styles/Alert'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const page = () => {
  const [tools, setTools] = useState({})
  const {data: session} = useSession()
  const router = useRouter()
  const [isSubmit, setIsSubmit] = useState(false)

  const createTool = async(e) => {
    console.log(tools);
    e.preventDefault()
    try{
      setIsSubmit(true)
      const res = await fetch('/api/tool/new',{
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
          tool1: tools.tool1,
          link1: tools.link1,
          tool2: tools.tool2,
          link2: tools.link2,
          tool3: tools.tool3,
          link3: tools.link3,
          tool4: tools.tool4,
          link4: tools.link4,
          tags: tools.tags
        })
      })

      console.log(res);
      setIsSubmit(false)
      if(res.ok){
        Alert('Tool Added')
        router.push('/')
      }
  
    }catch(err){
      console.log('here');
      Alert(err.response.data.message)
      setIsSubmit(false)
    }
  }

  return (
    <Form
    tools= {tools}
    setTools = {setTools}
    type={'Add'}
    handleSubmit={createTool}
    isSubmit = {isSubmit}
    />
  )
}

export default page