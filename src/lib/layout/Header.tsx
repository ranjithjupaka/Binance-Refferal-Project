import { ThemeToggle } from '@/lib/components/theme-toggle'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConnectWallet } from '@thirdweb-dev/react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MdMenu } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'
import { HiDocumentReport } from 'react-icons/hi'
import { FaArrowUpShortWide } from 'react-icons/fa6'
import { FaRegCreditCard } from 'react-icons/fa'

const Header = () => {
  const location = useLocation()
  const currentRoute = location.pathname

  return (
    <header className='flex h-16 w-full items-center justify-between p-4 md:p-6 container'>
      <a
        className='flex title-font font-medium items-center text-black mt-4 transition-transform transform-gpu scale-150 cursor-pointer'
        href='/'
      >
        <img src='/assets/logo.png' alt='' className='h-10' />
      </a>
      <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
        <a
          href='/dashboard'
          className={`${currentRoute == '/dashboard' ? 'text-white' : ''}`}
        >
          Dashboard
        </a>
        <a
          href='/transaction-report'
          className={`${currentRoute == '/transaction-report' ? 'text-white' : ''}`}
        >
          Transaction Report
        </a>
        <a
          href='/level-details'
          className={`${currentRoute == '/level-details' ? 'text-white' : ''}`}
        >
          Level Details
        </a>
        <a
          href='/income-report'
          className={`${currentRoute == '/income-report' ? 'text-white' : ''}`}
        >
          Income Report
        </a>
      </nav>
      <div className='flex items-center gap-2'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <MdMenu className='h-6 w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='border w-2/3 bg-white text-black'
          >
            <nav className='grid gap-2 p-4 text-sm font-medium w-full'>
              <a
                href='/dashboard'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/dashboard' ? 'bg-black text-white' : ''
                }`}
              >
                <MdDashboard className='h-6 w-6' />
                Dashboard
              </a>
              <a
                href='/transaction-report'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/transaction-report' ? 'bg-black text-white' : ''
                }`}
              >
                <FaRegCreditCard className='h-6 w-6' />
                Transaction Report
              </a>
              <a
                href='/level-details'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/level-details' ? 'bg-black text-white' : ''
                }`}
              >
                <FaArrowUpShortWide className='h-6 w-6' />
                Level Details
              </a>
              <a
                href='/income-report'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/income-report' ? 'bg-black text-white' : ''
                }`}
              >
                <HiDocumentReport className='h-6 w-6' />
                Income Report
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <ConnectWallet
          switchToActiveChain
          modalSize='compact'
          hideBuyButton
          hideSendButton
          hideReceiveButton
          theme={'light'}
          style={{ backgroundColor: 'white', color: 'black' }}
        />
      </div>
    </header>
  )
}

export default Header
