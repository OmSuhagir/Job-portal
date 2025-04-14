import React from 'react'
import Navbar from './Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { SpaceIcon } from 'lucide-react'

const jobArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className="flex gap-5">
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        jobArr.length <= 0 ? (<span className=''> Job Not Found</span>)
                            : (<div className='flex-1 h-[88vh] overflow-y-auto pb-5'>

                                <div className='grid grid-cols-3 gap-4'>
                                    {jobArr.map((job, index) =>(
                                         <Job />
                                    ))}
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs
