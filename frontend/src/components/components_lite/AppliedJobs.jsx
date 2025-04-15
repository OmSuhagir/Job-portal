import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from '../ui/table'
import { Badge } from '../ui/badge'

const jobs=[1,2,3,4,5]

const AppliedJobs = () => {
  return (
    <div>
       <Table>
        <TableCaption>
            Recent Applied Jobs
        </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead >Date</TableHead>
                <TableHead>Job title</TableHead>
                <TableHead >Company</TableHead>
                <TableHead className='text-right'>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                jobs.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>23-11-24</TableCell>
                        <TableCell>Software Engineer</TableCell>
                        <TableCell>Microsoft</TableCell>
                        <TableCell className='text-right'><Badge>Pending</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
       </Table>
    </div>
  )
}

export default AppliedJobs
