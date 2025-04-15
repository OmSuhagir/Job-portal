import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button';
import { User2, LogOut } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from '../ui/popover';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import Profile from './Profile';


const Navbar = () => {

    const {user} = useSelector((store) => store.auth);

    return (
        <div className='bg-white'>
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className='text-2xl font-bold'>
                        Job <span className='text-[#f83002]'>Portal</span>
                    </h1>
                </div>
                <div className='flex items-center gap-10'>
                    <ul className='flex font-medium items-center gap-6'>
                        <Link to={"/Home"}>Home</Link>
                        <Link to={'/Browse'}>Browse</Link>
                        <Link to={"/Jobs"}>Jobs</Link>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to={'/login'}><Button variant="outline">Login</Button></Link>
                                <Link to={'/register'}><Button className='bg-red-500 hover:bg-red-700'>Register</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>

                                <PopoverContent className='w-80'>
                                    <div className='flex items-center gap-4 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h3 className='font-medium'>Om Suhagir</h3>
                                            <p className='text-sm text-muted-foreground'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>

                                    </div>
                                    <div className='flex flex-col text-gray-600'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2></User2>
                                            <div><Button variant="link"><Link to={'/Profile'}>Profile</Link></Button></div>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut></LogOut>
                                            <Button variant="link">Logout</Button>
                                        </div>

                                    </div>

                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;