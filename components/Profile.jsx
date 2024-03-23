import { useSession } from 'next-auth/react'
import ToolCard from './ToolCard'

const Profile = ({data, handleEdit, handleDelete}) => {
  const {data: session} = useSession()
  return (
    <section className='w-full py-10'>
      <div className='mx-auto w-[90%]'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl text-gradient font-bold'>Welcome to your profile {session?.user.name.split(' ')[0]}</h1>
          <p className='text-blue-100 text-lg'>Here are the tools provided by you</p>
          <div className='md:w-9/12 md:grid grid-cols-2 gap-10'>
            {data.map(tool => (
              <ToolCard
              key={tool.userName}
              tool={tool}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              /> 
            ))}    
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile