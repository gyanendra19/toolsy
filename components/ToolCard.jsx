import React from 'react'
import { RiExternalLinkFill } from '@remixicon/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'



const ToolCard = ({ tool, handleEdit, handleDelete, setTagSearch, tagFilters }) => {
    const allTags = tool.tags.split('#')
    const pathname = usePathname()

    return (
        <div className='w-full h-fit mt-4 md:mt-0 rounded-md glassmorphism'>
            <div className='flex gap-3 w-full justify-evenly'>
                <img src={tool.creator.photo} alt='' width={45} height={30}
                    className='rounded-full object-contain'
                />

                <div>
                    <p className='font-semibold'>{tool.creator.userName}</p>
                    <p className='text-sm'>{tool.creator.email}</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 pt-4 md:px-5'>
                <div className='flex items-center'>
                    <p className='font-bold text-md whitespace-nowrap'>{tool.tool1}</p>
                    <a href={tool.link1} target='_blank' className='ml-1'><RiExternalLinkFill size={16} /></a>
                </div>
                <div className='flex items-center'>
                    <p className='font-bold text-md whitespace-nowrap'>{tool.tool2}</p>
                    <a href={tool.link2} target='_blank' className='ml-1'><RiExternalLinkFill size={16} /></a>
                </div>
                <div className='flex items-center'>
                    <p className='font-bold text-md whitespace-nowrap'>{tool.tool3}</p>
                    <a href={tool.link3} target='_blank' className='ml-1'><RiExternalLinkFill size={16} /></a>
                </div>
                <div className='flex items-center'>
                    <p className='font-bold text-md whitespace-nowrap'>{tool.tool4}</p>
                    <a href={tool.link4} target='_blank' className='ml-1'><RiExternalLinkFill size={16} /></a>
                </div>
            </div>

            <div className='mt-3 flex gap-1 md:ml-5 cursor-pointer'>
                {allTags.map(tag => (
                   tag !== '' && <span onClick={(e) => setTagSearch(e.target.textContent)}>{`#${tag}`}</span>
                ))}
            </div>

            {pathname === '/profile' &&
                <div className='w-full pt-2 gap-10 flex justify-center border-t-[1px] border-black'>
                        <span
                        onClick={() => handleEdit(tool)}
                        className='font-bold cursor-pointer'>Edit</span>
                    <span
                    onClick={() => handleDelete(tool)}
                    className=' font-bold drop-shadow-xl cursor-pointer'>Delete</span>
                </div>
            }
        </div>
    )
}

export default ToolCard