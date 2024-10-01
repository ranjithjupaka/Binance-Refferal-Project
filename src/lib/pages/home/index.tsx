import { useContract, useContractRead } from '@thirdweb-dev/react'
import { useEffect } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const Home = () => {
  const { contract } = useContract('0x42571ca6E3994629061de9e645bB722d9131c4a6')
  // const { data, isLoading, error } = useContractRead(contract, 'name')

  return (
    <main className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-8'>Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Balance</h2>
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>$12,345.67</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Total Deposits</h2>
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>$45,678.90</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Total Withdrawals</h2>
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>$9,876.54</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className='text-xl font-bold'>Pending Transactions</h2>
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>3</div>
          </CardContent>
        </Card>
      </div>
      {/* <div className='mt-8'>
         <h2 className='text-2xl font-bold mb-4'>Recent Transactions</h2>
         <Table>
           <TableHeader>
             <TableRow>
               <TableHead>Date</TableHead>
               <TableHead>Type</TableHead>
               <TableHead>Amount</TableHead>
               <TableHead>Status</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             <TableRow>
               <TableCell>2023-04-01</TableCell>
               <TableCell>Deposit</TableCell>
               <TableCell>$1,000.00</TableCell>
               <TableCell>
                 <Badge variant='secondary'>Completed</Badge>
               </TableCell>
             </TableRow>
             <TableRow>
               <TableCell>2023-03-28</TableCell>
               <TableCell>Withdrawal</TableCell>
               <TableCell>$500.00</TableCell>
               <TableCell>
                 <Badge variant='outline'>Pending</Badge>
               </TableCell>
             </TableRow>
             <TableRow>
               <TableCell>2023-03-15</TableCell>
               <TableCell>Deposit</TableCell>
               <TableCell>$2,500.00</TableCell>
               <TableCell>
                 <Badge variant='secondary'>Completed</Badge>
               </TableCell>
             </TableRow>
             <TableRow>
               <TableCell>2023-03-10</TableCell>
               <TableCell>Withdrawal</TableCell>
               <TableCell>$800.00</TableCell>
               <TableCell>
                 <Badge variant='secondary'>Completed</Badge>
               </TableCell>
             </TableRow>
           </TableBody>
         </Table>
       </div> */}
    </main>
  )
}

export default Home
