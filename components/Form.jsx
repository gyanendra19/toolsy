import React from 'react'

const Form = ({tools, setTools, type, handleSubmit, isSubmit}) => {

    const toolInput = (tool, link, valTool, valLink) => {
        return <div className='md:flex gap-8 mt-3'>
        <input
        placeholder='eg.Figma'
        value={valTool}
        onChange={tool}
        className='md:w-[18%] w-full h-[45px] bg-purple-200 rounded-md mt-2 focus:outline-none p-4 placeholder:text-black
        placeholder:text-sm' 
        type="text" />
        <input
        placeholder='www.figma.com'
        value={valLink}
        onChange={link}
        className='md:w-[18%] w-full h-[45px] bg-purple-200 rounded-md mt-2 focus:outline-none p-4 placeholder:text-black
        placeholder:text-sm' 
        type="text" />
        </div>
    }


  return (
    <section className='py-10 w-full'>
        <div className='mx-auto w-5/6'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-gradient text-5xl font-extrabold'>{type.toUpperCase()} TOOLS</h1>
                <p className='text-red-300 text-lg md:w-[40%]'>{type} tools that you know of, to make it convenient for you and for others</p>
                <form 
                onSubmit={handleSubmit}
                action="">
                <label className='flex flex-col' htmlFor="">
                    <span className='text-lg text-red-300 font-semibold'>{type} Tools and their links</span>
                    {toolInput((e) => setTools({...tools, tool1: e.target.value}), (e) => setTools({...tools, link1: e.target.value}), tools?.tool1, tools?.link1)}
                    {toolInput((e) => setTools({...tools, tool2: e.target.value}), (e) => setTools({...tools, link2: e.target.value}), tools?.tool2, tools?.link2)}
                    {toolInput((e) => setTools({...tools, tool3: e.target.value}), (e) => setTools({...tools, link3: e.target.value}), tools?.tool3, tools?.link3)}
                    {toolInput((e) => setTools({...tools, tool4: e.target.value}), (e) => setTools({...tools, link4: e.target.value}), tools?.tool4, tools?.link4)}
                </label>
                <label className='flex flex-col mt-6' htmlFor="">
                    <span className='text-lg text-red-300 font-semibold'>Tags</span>
                    <input 
                    onChange={(e) => setTools({...tools, tags: e.target.value})}
                    value={tools.tags}
                    placeholder='#design #deployment #font'
                    type='text' 
                    className='md:w-[40%] h-[45px] bg-purple-200 rounded-md mt-2 focus:outline-none p-4 placeholder:text-black' cols="10" rows="7"></input>
                </label>

                <div className='flex gap-4 mt-5 md:ml-56'>
                <button type='submit' className='bg-[#29283a] rounded-lg font-semibold py-2 px-5 text-black'>Cancel</button>
                <button type='submit' className='bg-[#FE644F] rounded-lg font-semibold py-2 px-5 text-black'>{isSubmit ? `Submitting..` : 'Submit'}</button>
                </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Form