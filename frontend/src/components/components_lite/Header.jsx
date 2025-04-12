import React from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


const Header = () => {
    return (
        <div className="text-center">
            <div>

                <div className='flex flex-col gap-5 my-10'>
                    <span className='p-4 py-2 mx-auto rounded-full bg-gray-200 text-red-600 font-medium flex items-center justify-center gap-2'><span className="text-[#614232] font-bold"><HiOutlineBuildingOffice2 /></span>No.1 Job Hunt Website</span>
                    <h2 className='text-5xl font-bold'>Search, Apply &<br />
                        <span>Get Your <span className='text-[#683ac2]'>Dream Job</span></span></h2>
                </div>
                <p>Start your Hunt for best life changing career opportunities from here in your <br />selected areas conviniently and get hired quickly.</p>
                <div className='flex w-[40%] shadow-lg pl-3 rounded-full items-center gap-4 mx-auto my-5 border border-gray-300'>
                    <input type="text" placeholder='find your dream jobs ' className='outline-none border-none w-full' />
                    <Button className='rounded-r-full'>
                        <Search className='h-5 w-5'></Search>
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Header
