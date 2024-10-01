import { ThemeToggle } from '@/lib/components/theme-toggle'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConnectWallet } from '@thirdweb-dev/react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MdMenu } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'
import { FaWallet } from 'react-icons/fa'

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
      {/* <Link to='#' className='flex items-center gap-2'>
        <MountainIcon className='h-6 w-6' />
        <span className='text-lg font-semibold'>Acme Inc</span>
      </Link> */}
      <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
        <Link to='#' className='hover:underline'>
          Dashboard
        </Link>
        <Link to='#' className='hover:underline'>
          Deposit Report
        </Link>
        <Link to='#' className='hover:underline'>
          Level Details
        </Link>
        <Link to='#' className='hover:underline'>
          Report
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
            className='border w-2/3 bg-black text-white'
          >
            <nav className='grid gap-2 p-4 text-sm font-medium w-full'>
              <a
                href='#'
                className='hover:bg-gray-400 p-2 flex rounded-md gap-2'
              >
                <MdDashboard className='h-6 w-6' />
                Dashboard
              </a>
              <a
                href='#'
                className='hover:bg-gray-400 p-2 flex rounded-md gap-2'
              >
                <MdDashboard className='h-6 w-6' />
                Deposit Report
              </a>
              <a
                href='#'
                className='hover:bg-gray-400 p-2 flex rounded-md gap-2'
              >
                <MdDashboard className='h-6 w-6' />
                Level Details
              </a>
              <a
                href='#'
                className='hover:bg-gray-400 p-2 flex rounded-md gap-2'
              >
                <MdDashboard className='h-6 w-6' />
                Report
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
        {/* <Button>Connect Wallet</Button> */}
      </div>
    </header>
    // <header className='text-white body-font'>
    //   <div className='container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center'>
    //     <a
    //       className='flex title-font font-medium items-center text-black mb-4 md:mb-0 transition-transform transform-gpu scale-150 cursor-pointer'
    //       href='/'
    //     >
    //       <img
    //         src='/assets/logo.png'
    //         alt=''
    //         className='h-20'
    //       />
    //     </a>
    //     <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center '>
    //       <a
    //         className={`mr-5 hover:text-black cursor-pointer ${
    //           currentRoute == '/' ? 'text-black' : ''
    //         }`}
    //         href='/'
    //       >
    //         Dashboard
    //       </a>
    //       <a
    //         className={`mr-5 hover:text-black cursor-pointer ${
    //           currentRoute == '/deposit-report' ? 'text-black' : ''
    //         }`}
    //         href='/deposit-report'
    //       >
    //         Deposit Report
    //       </a>
    //       <a
    //         className={`mr-5 hover:text-black cursor-pointer ${
    //           currentRoute == '/level-details' ? 'text-black' : ''
    //         }`}
    //         href='/level-details'
    //       >
    //         Level Details
    //       </a>
    //       <a
    //         className={`mr-5 hover:text-black cursor-pointer ${
    //           currentRoute == '/report' ? 'text-black' : ''
    //         }`}
    //         href='/report'
    //       >
    //         Report
    //       </a>

    //     </nav>
    //     {/* <button className='bg-yellow-300 border-b-4 border-r-5  border-yellow-500 text-black px-4 py-2 transition-transform transform-gpu hover:scale-105 hover:border-l-5'>
    //       Connect Wallet
    //     </button> */}
    //     <ConnectWallet
    //       switchToActiveChain
    //       modalSize='compact'
    //       className='bg-yellow-300 border-b-4 border-r-5  border-yellow-500 text-black px-4 py-2 transition-transform transform-gpu hover:scale-105 hover:border-l-5'
    //     />
    //   </div>
    // </header>
  )
}

export default Header
