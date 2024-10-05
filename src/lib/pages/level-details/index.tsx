import { useState } from 'react'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import { CONTRACT_ABI, contract_address } from '@/contracts/abi'

const index = () => {
  const address = useAddress()
  const { contract } = useContract(contract_address, CONTRACT_ABI)
  const {
    data: level2Data,
    isLoading: islevel2DataLoading,
    error: level2DataError,
  } = useContractRead(contract, 'stakerTeams', [address, 0])
  console.log(level2Data)

  const {
    data: level3Data,
    isLoading: islevel3DataLoading,
    error: level3DataError,
  } = useContractRead(contract, 'stakerTeams', [address, 1])

  const {
    data: level4Data,
    isLoading: islevel4DataLoading,
    error: level4DataError,
  } = useContractRead(contract, 'stakerTeams', [address, 2])

  const {
    data: level5Data,
    isLoading: islevel5DataLoading,
    error: level5DataError,
  } = useContractRead(contract, 'stakerTeams', [address, 3])

  const {
    data: level6Data,
    isLoading: islevel6DataLoading,
    error: level6DataError,
  } = useContractRead(contract, 'stakerTeams', [address, 4])

  const {
    data: level7Data,
    isLoading: islevel7DataLoading,
    error: level7DataError,
  } = useContractRead(contract, 'stakerTeams', [address, 5])
  return (
    <>
      <section className='text-white body-font mx-auto p-4 w-[90vw]'>
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
                <TableCell>2</TableCell>
                <TableCell>
                  {level2Data && level2Data['levelTeam'].toString()}
                </TableCell>
                <TableCell>
                  {level2Data &&
                    level2Data['levelBonuse'].toString() / 1000000000}
                </TableCell>
                <TableCell>
                  {level2Data &&
                    level2Data['levelBusiness'].toString() / 1000000000}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>
                  {level3Data && level3Data['levelTeam'].toString()}
                </TableCell>
                <TableCell>
                  {level3Data &&
                    level3Data['levelBonuse'].toString() / 1000000000}
                </TableCell>
                <TableCell>
                  {level3Data &&
                    level3Data['levelBusiness'].toString() / 1000000000}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>
                  {level4Data && level4Data['levelTeam'].toString()}
                </TableCell>
                <TableCell>
                  {level4Data &&
                    level4Data['levelBonuse'].toString() / 1000000000}
                </TableCell>
                <TableCell>
                  {level4Data &&
                    level4Data['levelBusiness'].toString() / 1000000000}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>
                  {level5Data && level5Data['levelTeam'].toString()}
                </TableCell>
                <TableCell>
                  {level5Data &&
                    level5Data['levelBonuse'].toString() / 1000000000}
                </TableCell>
                <TableCell>
                  {level5Data &&
                    level5Data['levelBusiness'].toString() / 1000000000}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>
                  {level6Data && level6Data['levelTeam'].toString()}
                </TableCell>
                <TableCell>
                  {level6Data &&
                    level6Data['levelBonuse'].toString() / 1000000000}
                </TableCell>
                <TableCell>
                  {level6Data &&
                    level6Data['levelBusiness'].toString() / 1000000000}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>
                  {level7Data && level7Data['levelTeam'].toString()}
                </TableCell>
                <TableCell>
                  {level7Data &&
                    level7Data['levelBonuse'].toString() / 1000000000}
                </TableCell>
                <TableCell>
                  {level7Data &&
                    level7Data['levelBusiness'].toString() / 1000000000}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}

export default index
