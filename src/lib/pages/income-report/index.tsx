import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { CONTRACT_ABI, contract_address } from '@/contracts/abi'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const index = () => {
  const connected = true
  const location = useLocation()
  const [query, setQuery] = useState<string | null>('level')
  const address = useAddress()
  const { contract } = useContract(contract_address, CONTRACT_ABI)

  const {
    data: directData,
    isLoading: isDirectLoading,
    error: directError,
  } = useContractRead(contract, 'getAllDirect', [address])

  const {
    data: cashbackData,
    isLoading: isCashbackLoading,
    error: cashbackError,
  } = useContractRead(contract, 'getAllCashback', [address])

  const {
    data: levelData,
    isLoading: isLevelLoading,
    error: LevelError,
  } = useContractRead(contract, 'getAllLevel', [address])

  const {
    data: rewardData,
    isLoading: isRewardLoading,
    error: rewardError,
  } = useContractRead(contract, 'getAllReward', [address])

  const {
    data: blrData,
    isLoading: isBlrLoading,
    error: blrError,
  } = useContractRead(contract, 'getAllBLR', [address])

  console.log(
    'direct',
    directData,
    'cashback',
    cashbackData,
    'level',
    levelData,
    'reward',
    rewardData,
    'blr',
    blrData
  )

  useEffect(() => {
    const s = new URLSearchParams(location.search)
    console.log(s.get('q'))

    if (!s.get('q')) {
      setQuery('level')
    } else {
      setQuery(s.get('q'))
    }
  }, [])

  function capitalizeFirstLetter(s: string | null) {
    if (!s) return ''
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
  }

  const getISTDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
  }

  return (
    <>
      <section className='text-white body-font mx-auto p-4 w-[90vw]'>
        <div className='mt-2 bg-white text-black rounded-md p-4'>
          <h2 className='text-2xl font-bold mb-4'>
            {capitalizeFirstLetter(query)} Income Details
          </h2>
          <hr className='w-full h-[2px] bg-black' />
          <Table className='w-full'>
            <TableHeader>
              {(query === 'level' && cashbackData?.length === 0) ||
              (query === 'blr' && blrData?.length === 0) ||
              (query === 'direct' && directData?.length === 0) ||
              (query === 'cashback' && cashbackData?.length === 0) ||
              (query === 'reward' && rewardData?.length === 0) ? (
                <span className='text-center text-lg mt-2'>No Records</span>
              ) : (
                <TableRow>
                  <TableHead>Amount</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              )}
            </TableHeader>
            <TableBody>
              {query === 'level' &&
                levelData?.map((data: any) => (
                  <TableRow>
                    <TableCell>{data.amount.toString()}</TableCell>
                    <TableCell>
                      {getISTDate(data.timestamp.toString())}
                    </TableCell>
                  </TableRow>
                ))}
              {query === 'reward' &&
                rewardData?.map((data: any) => (
                  <TableRow>
                    <TableCell>{data.amount.toString()}</TableCell>
                    <TableCell>
                      {getISTDate(data.timestamp.toString())}
                    </TableCell>
                  </TableRow>
                ))}
              {query === 'direct' &&
                directData?.map((data: any) => (
                  <TableRow>
                    <TableCell>{data.amount.toString()}</TableCell>
                    <TableCell>
                      {getISTDate(data.timestamp.toString())}
                    </TableCell>
                  </TableRow>
                ))}
              {query === 'blr' &&
                blrData?.map((data: any) => (
                  <TableRow>
                    <TableCell>{data.amount.toString()}</TableCell>
                    <TableCell>
                      {getISTDate(data.timestamp.toString())}
                    </TableCell>
                  </TableRow>
                ))}
              {query === 'cashback' &&
                cashbackData?.map((data: any) => (
                  <TableRow>
                    <TableCell>{data.amount.toString()}</TableCell>
                    <TableCell>
                      {getISTDate(data.timestamp.toString())}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* {query === 'level' && (
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
          )} */}
        </div>
      </section>
    </>
  )
}

export default index
