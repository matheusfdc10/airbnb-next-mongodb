import './globals.css'
import { Nunito } from 'next/font/google'

import Navbar from '@/components/Navbar'
import RegisterModal from '@/components/Modal/RegisterModal'
import ToasterProvider from '@/providers/ToasterProvider'
import LoginModal from '@/components/Modal/LoginModal'
import getCurrentUser from '@/actions/getCurrentUser'
import RentModal from '@/components/Modal/RentModal'
import SearchModal from '@/components/Modal/SearchModal'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ subsets: ['latin'] })

const RootLayout = async({
  children,
} : {
  children: React.ReactNode
}) => {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout