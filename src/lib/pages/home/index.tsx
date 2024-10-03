import { useContract, useContractRead } from '@thirdweb-dev/react'
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

const Home = () => {
  const { contract } = useContract('0x42571ca6E3994629061de9e645bB722d9131c4a6')
  // const { data, isLoading, error } = useContractRead(contract, 'name')

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
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='plan'>Plan</Label>
            <Select id='plan'>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a plan' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='basic'>Basic (100 - 1999)</SelectItem>
                <SelectItem value='standard'>Standard (2000 - 2999)</SelectItem>
                <SelectItem value='vip'>VIP (3000 - 4999)</SelectItem>
                <SelectItem value='vvip'>VVIP (above 5000)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='amount'>Amount</Label>
            <Input id='amount' type='number' placeholder='Enter the amount' />
          </div>
          <Button type='submit' className='w-full'>
            Stake
          </Button>
        </form>
      </Card>
    </main>
  )
}

export default Home
