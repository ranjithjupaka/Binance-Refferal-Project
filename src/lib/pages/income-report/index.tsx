import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const index = () => {
  const connected = true
  const location = useLocation()
  const [query, setQuery] = useState<string | null>('level')

  useEffect(() => {
    const s = new URLSearchParams(location.search)
    console.log(s.get('q'))
    setQuery(s.get('q'))
  }, [])

  function capitalizeFirstLetter(s: string | null) {
    if (!s) return ''
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
  }

  return (
    <>
      <section className='text-white body-font mx-auto p-4 w-[90vw]'>
        <div className='mt-2 bg-white text-black rounded-md p-4'>
          <h2 className='text-2xl font-bold mb-4'>
            {capitalizeFirstLetter(query)} Income Details
          </h2>
          <hr className='w-full h-[2px] bg-black' />
          {query === 'direct' && (
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead>Amount</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
          {query === 'level' && (
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
          )}
        </div>
      </section>
    </>
  )
}

export default index
