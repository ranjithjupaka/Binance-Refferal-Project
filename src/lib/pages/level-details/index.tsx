import { useState } from 'react'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'

const index = () => {
  const connected = true
  return (
    <>
      <section className='text-white body-font mx-auto p-4 w-[90vw]'>
        {connected ? (
          <div className='mt-2 bg-white text-black rounded-md p-4'>
            <h2 className='text-2xl font-bold mb-4'>level Details</h2>
            <hr className='w-full h-[2px] bg-black' />
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead>Level</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Income</TableHead>
                  <TableHead>Business</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>55.2</TableCell>
                  <TableCell>78.2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>55.2</TableCell>
                  <TableCell>78.2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>55.2</TableCell>
                  <TableCell>78.2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>55.2</TableCell>
                  <TableCell>78.2</TableCell>
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

export default index
