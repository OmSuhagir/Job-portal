import {React, useState} from 'react'
import Navbar from '../components_lite/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/data'
import { toast } from 'sonner'


const Register = () => {


  const [ input, setInput]  = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    file: "",
  })

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.files?.[0] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);

    if(input.file){
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        header:{
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if(res.data.success) {
        navigate('/login');
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response ? error.response.data.message : "An unexpected error occured."
      toast.error(errorMessage)
    }
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center justify-center max-w-7xl mb-auto '>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-500 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5 text-center text-blue-500'>Register</h1>
          <div className='my-2'>
            <Label>Name</Label>
            <Input type="text" placeholder="John Doe" value={input.fullname} name='fullname' onChange={changeEventHandler}></Input>
          </div>

          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email" value={input.email} name='email' onChange={changeEventHandler} placeholder="jhondoe@gmail.com"></Input>
          </div>

          <div className='my-2'>
            <Label>Password</Label>
            <Input type="password" placeholder="******" value={input.passworrd} name='password' onChange={changeEventHandler}></Input>
          </div>

          <div className='my-2'>
            <Label>Phone No.</Label>
            <Input type="tel" placeholder="+91 1234567890" value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler}></Input>
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='Student' checked = {input.role === 'Student'} onChange = {changeEventHandler} className='cursor-pointer'></Input>
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='Recruiter' checked = {input.role === 'Recruiter'} onChange = {changeEventHandler} className='cursor-pointer' ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            <Label>Profile Photo</Label>
            <Input type='file' onChange={changeFileHandler} accept='image/*' className='cursor-pointer'></Input>
          </div>

          <button type='submit' className='block w-full py-2 text-white bg-primary hover:bg-primary/90 rounded-md my-3'>
            Register
          </button>

          <p className="text-gray-500 text-md my-2">
            Already have account ? <Link to='/login' className='text-blue-700'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
