import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { CONTRACT_ABI } from '@/contracts/abi'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth()
  const { contract } = useContract(
    '0x381b3Cda25d80d66b4e4a46D1242C153638b1003',
    CONTRACT_ABI
  )

  const [username, setUsername] = useState('')
  const [plan, setPlan] = useState(0)
  const [amount, setAmount] = useState(0)

  const {
    mutateAsync: deposit,
    isLoading: isDepositLoading,
    error,
  } = useContractWrite(contract, 'deposit')

  useEffect(() => {
    if (!isLoading && isAuthenticated && location.pathname === '/') {
      navigate('/dashboard')
    }
  }, [isAuthenticated, isLoading])

  useEffect(() => {
    if (!isDepositLoading && error) {
      console.log('error', error)
    }
  }, [isDepositLoading, error])

  const handleStake = async (e: any) => {
    e.preventDefault()

    try {
      const val = amount * 1000000000
      console.log(username, plan, amount)

      if (username && plan && amount) {
        await deposit({
          args: [username, 'abc123'],
          overrides: {
            value: val.toString(),
          },
        })
      }
    } catch (err) {
      console.log('err', err)
      console.log('error', error)
    }
  }
  return (
    <main className='container mx-auto px-4 md:px-6 flex-1 flex flex-col items-center justify-center space-y-8'>
      <Card className='w-[80vw] md:w-[40vw] rounded-2xl p-6 space-y-4 mt-4'>
        <form className='grid gap-4 '>
          <div className='grid gap-2'>
            <Label htmlFor='username'>Username</Label>
            <Input
              id='username'
              type='text'
              placeholder='Enter your username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='plan'>Plan</Label>
            <Select onValueChange={(value) => setPlan(Number(value))}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a plan' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0'>Basic (100 - 1999)</SelectItem>
                <SelectItem value='1'>Standard (2000 - 2999)</SelectItem>
                <SelectItem value='2'>VIP (3000 - 4999)</SelectItem>
                <SelectItem value='3'>VVIP (above 5000)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='amount'>Amount</Label>
            <Input
              id='amount'
              type='number'
              placeholder='Enter the amount'
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <Button type='submit' className='w-full' onClick={handleStake}>
            {isDepositLoading ? 'Stacking...' : 'Stake'}
          </Button>
        </form>
      </Card>
    </main>
  )
}

export default Home
