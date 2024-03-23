'use client'
import Profile from '@components/Profile'
import { Alert } from '@styles/Alert'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const pages = () => {
  const [userTools, setUserTools] = useState([])
  const {data: session} = useSession()
  const router = useRouter()

  useEffect(() => {
   const getUserTool = async() => {
      const res = await axios({
        method: 'GET',
        url: `/api/user/${session?.user.id}/tools`
      })

      setUserTools(res.data)
    }

    if(session) getUserTool()
  }, [session])

  const handleEdit = (tool) => {
    router.push(`/edit-tool?id=${tool._id}`)
  }

  const handleDelete = async(tool) => {
    try{
     const res = await fetch(`/api/tool/${tool._id}`,{
        method: 'DELETE'
      })
      
      const filteredPost = userTools.filter(userTool => userTool.id !== tool._id)
      setUserTools(filteredPost)
      if(res.ok){
        Alert('Tool Deleted')
      }
      router.push('/profile')
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Profile
    data = {userTools}
    handleDelete = {handleDelete}
    handleEdit={handleEdit}
    />
  )
}

export default pages