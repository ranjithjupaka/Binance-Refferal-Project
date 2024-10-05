import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { FaCopy } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { CONTRACT_ABI, contract_address } from '@/contracts/abi'
import { toast } from 'react-toastify'

const index = () => {
  const PUBLIC_URL = 'http://localhost:5173'
  const [ReDepositAmount, setReDepositAmount] = useState(0)
  const [WithdrawAmount, setWithdrawAmount] = useState(0)
  const { contract } = useContract(contract_address, CONTRACT_ABI)
  const address = useAddress()
  const [url, setUrl] = useState('')

  console.log(window.location.href.split('/dashboard')[0])

  useEffect(() => {
    setUrl(window.location.href.split('/dashboard')[0])
  }, [])

  const {
    mutateAsync: deposit,
    isLoading: isDepositLoading,
    error: DepositError,
  } = useContractWrite(contract, 'deposit')

  const navigate = useNavigate()
  const { userData } = useAuth()
  console.log(userData)

  const formatIncome = (income: number) => {
    const stakes = income / 1000000000
    return stakes.toFixed(2)
  }

  const handleReDeposit = async (e: any) => {
    e.preventDefault()
    try {
      const val = ReDepositAmount * 1000000000
      if (address) {
        await deposit({
          args: ['', ''],
          overrides: {
            value: val.toString(),
          },
        })

        if (!DepositError && !isDepositLoading) {
          toast.success('ReDeposit Successful')
        }
      }
    } catch (err) {
      console.log('err', err)
      console.log('error', DepositError)
    }
  }

  const handleWithdraw = async (e: any) => {
    e.preventDefault()
    try {
      const val = WithdrawAmount * 1000000000
      // if (address) {
      //   await deposit({
      //     args: [address, ''],
      //     overrides: {
      //       value: val.toString(),
      //     },
      //   })
      // }
    } catch (err) {
      console.log('err', err)
      console.log('error', DepositError)
    }
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
              {` ${url}?ref=${address}`}
            </div>
            <FaCopy
              className='h-8 w-8 cursor-pointer'
              onClick={() => {
                navigator.clipboard.writeText(` ${url}?ref=${address}`)
                toast.success('Copied to clipboard')
              }}
            />
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
            <h2 className='text-xl font-bold'>Cashback Income</h2>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-semibold'>
              {formatIncome(userData['totalCashbackIncome'].toString())}
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Button className='font-dance mt-2'>Claim</Button>
              <Button
                className='font-dance mt-2'
                onClick={() => navigate('/income-report?q=cashback')}
              >
                View Details
              </Button>
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
            <Input
              placeholder='Re-Deposit Amount'
              onChange={(e) => setReDepositAmount(Number(e.target.value))}
            />
            <Button className='font-dance mt-2' onClick={handleReDeposit}>
              ReDeposit
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Withdraw</h2>
          </CardHeader>
          <CardContent>
            <Input
              placeholder='Withdraw Amount'
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
            />
            <Button className='font-dance mt-2'>Withdraw</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default index
