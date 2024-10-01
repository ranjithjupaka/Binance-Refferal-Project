import { useState } from 'react'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const DepositReport = () => {
  const connected = true
  return (
    <>
      <section className='text-white body-font mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full'>
        {connected ? (
          <div className='mt-8'>
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
          </div>
        ) : (
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Connect your Wallet!
          </h1>
        )}
      </section>
    </>
  )
}

export default DepositReport
