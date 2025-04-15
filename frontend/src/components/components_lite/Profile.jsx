import React from 'react'
import Navbar from './Navbar'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from '../ui/badge'
import AppliedJobs from './AppliedJobs'

const skills = ["React", "Python", "Javascript", "MongoDB", "CSS", "HTML", "NodeJs", "Docker", "Redux"]

const Profile = () => {

    const haveResume = true;
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white  border border-gray-200 rounded-2xl my-5 p-8 shadow 
            shadow-gray-400 hover:shadow-yellow-400'>
                <div className="flex justify-between">
                    <div className='flex items-center gap-5'>

                        <Avatar className="cursor-pointe h-24 w-24">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>

                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla veniam voluptatem eveniet  eaque.</p>
                        </div>
                    </div>

                    <Button className='text-right' variant="outline"><Pen /></Button>

                </div>
                <div className=' my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span className=''>omsuhagir123@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span className=''>9022343623</span>
                    </div>
                </div>
                <div>
                    <div className='my-5'>
                        <h1 className='text-medium font-bold'>Skills</h1>
                        <div className='flex items-center gap-1'>
                            {
                                skills.length != 0 ? skills.map((item, index) => (
                                    <Badge key={index}>{item}</Badge>
                                )) : <span>NA</span>
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <label className='text-medium font-bold'>Upload Resume</label>
                        <div>
                            {
                                haveResume ? <a target='_blank' href={"http://resume.com"} download='resume.pdf' className='text-blue-400  hover:underline cursor-pointer'>Download resume</a> :
                                    <span>No Resume Found</span>
                            }
                        </div>
                    </div>
                </div>


            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className='text-lg my-5 font-bold'>
                    Applied Jobs
                </h1>
                {/* Application Table */}
                <AppliedJobs />
            </div>
        </div>

    )
}

export default Profile
