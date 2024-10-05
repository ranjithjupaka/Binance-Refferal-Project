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

  const {
    mutateAsync: withdraw,
    isLoading: isWithdrawLoading,
    error: WithdrawError,
  } = useContractWrite(contract, 'withdraw')

  const {
    mutateAsync: claimROI,
    isLoading: isclaimROILoading,
    error: claimROIError,
  } = useContractWrite(contract, 'claimROIIncome')

    const {
      mutateAsync: claimBLR,
      isLoading: isclaimBLRLoading,
      error: claimBLRError,
    } = useContractWrite(contract, 'claimBLRIncome')

    const {
      data: adminAddress,
      isLoading: isadminAddressLoading,
      error: adminAddressError,
    } = useContractRead(contract, 'owner')
    console.log('adminAddress', adminAddress, address === adminAddress)

    const navigate = useNavigate()
    const { userData, stakerBusinessData } = useAuth()
    console.log(userData, stakerBusinessData)

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
            args: [''],
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

        toast.error('ReDeposit Failed')
      }
    }

    const handleWithdraw = async (e: any) => {
      e.preventDefault()
      try {
        const val = WithdrawAmount * 1000000000
        if (address) {
          await withdraw({
            args: [val.toString()],
          })

          if (!WithdrawError && !isWithdrawLoading) {
            toast.success('Withdraw Successful')
          }
        }
      } catch (err) {
        console.log('err', err)
        console.log('error', DepositError)

        const errmsg = err as string
        console.log(errmsg, 'errmsg')

        if (errmsg.toString().includes('Insufficient user balance')) {
          toast.error('Insufficient user balance')
        } else {
          toast.error('Withdraw Failed')
        }
      }
    }

    const handleClaimROI = async (e: any) => {
      e.preventDefault()
      try {
        if (address) {
          await claimROI({
            args: [],
          })

          if (!claimROIError && !isclaimROILoading) {
            toast.success('Cahback Income Claim Successful')
          }
        }
      } catch (err) {
        console.log('err', err)
        const errmsg = err as string
        console.log(errmsg.toString())

        if (errmsg.toString().includes('You already Claimed Maximum ROI')) {
          toast.error('You already Claimed Maximum ROI')
        } else {
          toast.error('Cahback Income can be claimed once in a day')
        }
      }
    }

    const handleClaimBLR = async (e: any) => {
      e.preventDefault()
      try {
        if (address) {
          await claimBLR({
            args: [],
          })

          if (!claimROIError && !isclaimROILoading) {
            toast.success('BLR Claim Successful')
          }
        }
      } catch (err) {
        console.log('err', err)
        const errmsg = err as string
        console.log(errmsg.toString())

        toast.error('BLR Income claim failed')
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
              <h2 className='text-xl font-bold'>Balance</h2>
            </CardHeader>
            <CardContent>
              <div className='text-xl font-semibold'>
                {formatIncome(userData['balance'].toString())}
              </div>
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
                {stakerBusinessData['totalTeamCount'].toString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className='text-xl font-bold'>Total Team Business</h2>
            </CardHeader>
            <CardContent>
              <div className='text-xl font-semibold'>
                {formatIncome(stakerBusinessData['teamBusiness'].toString())}
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
                <Button className='font-dance mt-2' onClick={handleClaimROI}>
                  {isclaimROILoading ? 'Claiming...' : 'Claim'}
                </Button>
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
              <Button className='font-dance mt-2' onClick={handleWithdraw}>
                {isWithdrawLoading ? 'Withdrawing...' : 'Withdraw'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    )
}

export default index
