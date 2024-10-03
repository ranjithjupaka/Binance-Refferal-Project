import { useState } from 'react'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'

const DepositReport = () => {
  const connected = true
  return (
    <>
      <section className='text-white body-font mx-auto p-4 w-[90vw]'>
        {connected ? (
          <div className='mt-2 bg-white text-black rounded-md p-4'>
            <h2 className='text-2xl font-bold mb-4'>Deposit Report</h2>
            <hr className='w-full h-[2px] bg-black' />
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead>Amount</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>$1,000.00</TableCell>
                  <TableCell>2023-04-01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$500.00</TableCell>
                  <TableCell>2023-03-28</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$2,500.00</TableCell>
                  <TableCell>2023-03-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$800.00</TableCell>
                  <TableCell>2023-03-10</TableCell>
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
