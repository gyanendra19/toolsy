import Provider from '@components/Provider'
import Nav from '@components/nav'
import '@styles/global.css'
import { Suspense } from 'react'


export const metadata = {
    title: 'Toolsy',
    description: 'Find Tech Tools'
}

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='bg-[#1A1C2E] w-full min-h-screen'>
            <div className="w-1/6 h-[30px] bg-white absolute top-40 left-1/2 blur-[110px]"></div>
                <Nav />
                <Suspense>
                {children}
                </Suspense>
            </div>
          </Provider>
        </body>
    </html>
  )
}

export default layout