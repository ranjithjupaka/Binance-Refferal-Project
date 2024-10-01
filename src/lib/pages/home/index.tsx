import { useContract, useContractRead } from '@thirdweb-dev/react'
import { useEffect } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { FaCopy } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Home = () => {
  const { contract } = useContract('0x42571ca6E3994629061de9e645bB722d9131c4a6')
  // const { data, isLoading, error } = useContractRead(contract, 'name')

  return (
    <main className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
        <Card className=''>
          <CardHeader>
            <h2 className='text-xl font-bold'>My Address</h2>
          </CardHeader>
          <CardContent className=''>
            <div className='text-sm font-semibold break-all'>
              0x35D62c3788c3c2B0a5cF2A009CBB8d287f4FfB55
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>My Refferal link</h2>
          </CardHeader>
          <CardContent className='flex gap-2 text-wrap items-center justify-center'>
            <div className='text-sm font-semibold break-all'>
              https://bullrun.com?ref=abch6789
            </div>
            <FaCopy className='h-4' />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Total Investments</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>9</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Total Team</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Reward</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>0.00</div>
            <Button className='font-dance mt-2'>Claim</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Direct Bonus</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>5.63</div>
            <Button className='font-dance mt-2'>View Details</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Level Bonus</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>0.00</div>
            <Button className='font-dance mt-2'>Level Claim</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Champion Circle</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>5.63</div>
            <Button className='font-dance mt-2'>Champion Claim</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Capital Profit</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>5.63</div>
            <Button className='font-dance mt-2'>Capital Claim</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>ReDeposit</h2>
          </CardHeader>
          <CardContent>
            <Input placeholder='Re-Deposit Amount' />
            <Button className='font-dance mt-2'>ReDeposit</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default Home
