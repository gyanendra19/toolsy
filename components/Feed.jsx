'use client'
import React, { useEffect, useState } from 'react'
import ToolCard from './ToolCard'
import axios from 'axios'

const Feed = () => {
  const [allTools, setallTools] = useState([])
  const [search, setSearch] = useState('')
  const [tagSearch, setTagSearch] = useState('')
  
  useEffect(() => {
    (async () => {
      const res = await axios({
        method: 'GET',
        url: '/api/allTools'
      })

      if (search === '') setallTools(res.data)
    })()
  }, [search])
  console.log(allTools);
  
  
  const searchFilters = (search) => {
    if(search === '') return
    const filterTools = allTools.filter(tool => Object.values(tool).includes(search))
    setallTools(filterTools)
  }

  useEffect(() => {
    const tagFilterTools = allTools.filter(tool => tool.tags === tagSearch)
    setallTools(tagFilterTools)
  }, [tagSearch])
  

  return (
    <div className='py-8 w-full flex flex-col items-center'>
      <div className='w-full flex justify-center items-center mt-10 gap-2'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-3/6 w-full rounded-md bg-white px-4 h-[40px] focus:outline-none"
          placeholder="search tags with hashtags"
          type="text" />
        <button
          onClick={() => searchFilters(search)}
          className='bg-[#A44CCD] px-5 py-2 rounded-md'>Search</button>
      </div>


      <div className='md:grid w-full flex flex-col grid-cols-3 mt-10 md:gap-16'>
        {allTools?.map(tool => (
          <ToolCard
            setTagSearch={setTagSearch}
            key = {tool.email}
            tool = {tool}
          />
        ))}
      </div>
    </div>
  )
}

export default Feed