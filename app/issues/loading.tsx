import { Button, TableRoot, TableHeader, TableRow, TableColumnHeaderCell, TableBody, TableCell } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssuesStatusBadge from '../components/IssuesStatusBadge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssueActions from './IssueActions'

const Loading = () => {

    const issues = [1, 2, 3, 4, 5]
  return (
    <div className='p-4'>

      <IssueActions/>
      <TableRoot variant='surface'>
        <TableHeader>
          <TableRow>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className='hidden md:table-cell'>Status</TableColumnHeaderCell>
            <TableColumnHeaderCell className='hidden md:table-cell'>Created</TableColumnHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {issues.map(issue => (
            <TableRow key={issue}>
              <TableCell>
                <Skeleton/>
                <Skeleton/>
              </TableCell>
              <TableCell className='hidden md:table-cell'><Skeleton/></TableCell>
              <TableCell className='hidden md:table-cell'><Skeleton/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

    </div>
  )
}

export default Loading