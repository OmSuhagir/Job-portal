import React from 'react'
import { Bookmark } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'

const Job = () => {
    return (

        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3 hover:m-0 transition-all duration-300 ease-in-out '>
            <div className='flex items-center justify-between'>
                <h1>3 Days Ago</h1>
                <Button variant={'outline'} className='rounded-full' size='icon' >
                    <Bookmark />
                </Button>
            </div>
            <div>
                <div className='flex items-center gap-2 mmy-2'>
                    <Button className='p-6' variant='outline' size='icon'>
                        <Avatar>
                            <AvatarImage src='/logo.png'></AvatarImage>
                        </Avatar>
                    </Button>
                    <div>
                    </div>
                    <div>
                        <h1 className='text-lg font-medium'>Company Name</h1>
                        <p className='text-sm text-gray-600'>India</p>
                    </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg my-2'>Job Title</h2>
                        <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat praesentium atque repudiandae.</p>
                    </div>
                    <div>
                        <div className='gap-2 flex items-center mt-4 '>
                            <Badge className='text-blue-700 font-bold' variant={"ghost"}> 10 Position</Badge>
                            <Badge className='text-[#FA4F09] font-bold' variant={"ghost"}> 20 LPA</Badge>
                            <Badge className='text-[#6B3AC2] font-bold' variant={"ghost"}> Remote</Badge>
                            <Badge className='text-black font-bold' variant={"ghost"}> Full Time</Badge>
                        </div>
                    </div>
                </div>

            </div>
        
    )
}

export default Job
