import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import { useEffect } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { FaCopy } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { CONTRACT_ABI } from '@/contracts/abi'

const index = () => {
  const PUBLIC_URL = 'http://localhost:5173'
  const { contract } = useContract(
    '0x381b3Cda25d80d66b4e4a46D1242C153638b1003',
    CONTRACT_ABI
  )
  const address = useAddress()
  const { data, isLoading, error } = useContractRead(
    contract,
    'userReferralCodes',
    [address]
  )
  const navigate = useNavigate()
  const { userData } = useAuth()
  console.log(userData)

  useEffect(() => {
    console.log(data, error)
  }, [data, error, isLoading])

  const formatIncome = (income: number) => {
    const stakes = income / 1000000000
    return stakes.toFixed(2)
  }

  return (
    <main className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
        <Card className=''>
          <CardHeader>
            <h2 className='text-xl font-bold'>My Address</h2>
          </CardHeader>
          <CardContent className=''>
            <div className='text-sm font-semibold break-all'>
              {userData['userAddress']}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>My Refferal link</h2>
          </CardHeader>
          <CardContent className='flex gap-2 text-wrap items-center justify-center'>
            <div className='text-sm font-semibold break-all'>
              {isLoading
                ? 'loading...'
                : ` ${PUBLIC_URL}?ref=${data.toString()}`}
            </div>
            <FaCopy className='h-4' />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Total Stakes</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {formatIncome(userData['totalStaked'].toString())}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Total Team</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {userData['referrals'] ? userData['referrals'].length : 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Direct Income</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {formatIncome(userData['totalDirectIncome'].toString())}
            </div>
            <Button
              className='font-dance mt-2'
              onClick={() => navigate('/income-report?q=direct')}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Level Income</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {formatIncome(userData['totalLevelIncome'].toString())}
            </div>
            <Button
              className='font-dance mt-2'
              onClick={() => navigate('/income-report?q=level')}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>BLR Income</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {' '}
              {formatIncome(userData['totalBLRIncome'].toString())}
            </div>
            <Button
              className='font-dance mt-2'
              onClick={() => navigate('/income-report?q=blr')}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Reward Income</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {formatIncome(userData['totalRewardIncome'].toString())}
            </div>
            <Button
              className='font-dance mt-2'
              onClick={() => navigate('/income-report?q=reward')}
            >
              View Details
            </Button>
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
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Withdraw</h2>
          </CardHeader>
          <CardContent>
            <Input placeholder='Withdraw Amount' />
            <Button className='font-dance mt-2'>Withdraw</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default index
