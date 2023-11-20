import prisma from '@/prisma/client'
import { Button, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssuesStatusBadge from '../components/IssuesStatusBadge'
import IssueActions from './IssueActions'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
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
            <TableRow key={issue.id}>
              <TableCell>
                {issue.title}
                <div className="block md:hidden"><IssuesStatusBadge status={issue.status}/></div>
              </TableCell>
              <TableCell className='hidden md:table-cell'><IssuesStatusBadge status={issue.status}/></TableCell>
              <TableCell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

    </div>
  )
}

export default IssuesPage