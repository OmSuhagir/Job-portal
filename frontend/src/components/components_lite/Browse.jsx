import React from 'react'
import Navbar from './Navbar'
import Job from './Job';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Result {randomJobs.length}</h1>
                <div className='grid grid-cols-3 gap-4 my-5'>
                    {
                        randomJobs.map((item, index) => {
                            return <Job />;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse
