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
import { TiGroup } from 'react-icons/ti'

const Header = () => {
  const location = useLocation()
  const currentRoute = location.pathname

  return (
    <header className='flex h-16 w-full items-center justify-between p-4 md:p-6 container'>
      <Link
        className='flex title-font font-medium items-center text-black mt-4 transition-transform transform-gpu scale-150 cursor-pointer'
        to='/'
      >
        <img src='/assets/logo.png' alt='' className='h-10' />
      </Link>
      <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
        <Link
          to='/dashboard'
          className={`${currentRoute == '/dashboard' ? 'text-white' : ''}`}
        >
          Dashboard
        </Link>
        <Link
          to='/transaction-report'
          className={`${
            currentRoute == '/transaction-report' ? 'text-white' : ''
          }`}
        >
          Transaction Report
        </Link>
        <Link
          to='/level-details'
          className={`${currentRoute == '/level-details' ? 'text-white' : ''}`}
        >
          Level Details
        </Link>
        <Link
          to='/team'
          className={`${currentRoute == '/team' ? 'text-white' : ''}`}
        >
          Team
        </Link>
        <Link
          to='/income-report'
          className={`${currentRoute == '/income-report' ? 'text-white' : ''}`}
        >
          Income Report
        </Link>
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
              <Link
                to='/dashboard'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/dashboard' ? 'bg-black text-white' : ''
                }`}
              >
                <MdDashboard className='h-6 w-6' />
                Dashboard
              </Link>
              <Link
                to='/transaction-report'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/transaction-report'
                    ? 'bg-black text-white'
                    : ''
                }`}
              >
                <FaRegCreditCard className='h-6 w-6' />
                Transaction Report
              </Link>
              <Link
                to='/level-details'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/level-details' ? 'bg-black text-white' : ''
                }`}
              >
                <FaArrowUpShortWide className='h-6 w-6' />
                Level Details
              </Link>
              <Link
                to='/team'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/team' ? 'bg-black text-white' : ''
                }`}
              >
                <TiGroup className='h-6 w-6' />
                Team
              </Link>
              <Link
                to='/income-report'
                className={` p-2 flex rounded-md gap-2 ${
                  currentRoute == '/income-report' ? 'bg-black text-white' : ''
                }`}
              >
                <HiDocumentReport className='h-6 w-6' />
                Income Report
              </Link>
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
          style={{
            backgroundColor: 'white',
            color: 'black',
            marginTop: '16px',
          }}
        />
      </div>
    </header>
  )
}

export default Header
