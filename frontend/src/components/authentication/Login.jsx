import React, { useState } from 'react'
import Navbar from '../components_lite/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/data.js'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authslice'
import store from '@/redux/store'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

const Login = () => {



  const [input, setInput] = useState({

    email: "",
    password: "",
    role: "",


  })

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth)

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.files?.[0] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate('/');
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response ? error.response.data.message : "An unexpected error occured."
      toast.error(errorMessage)
    }
    finally {
      dispatch(setLoading(false));
    }
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center justify-center max-w-7xl mb-auto '>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-500 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5 text-center text-blue-500'>Login</h1>


          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email" value={input.email} name='email' onChange={changeEventHandler} placeholder="jhondoe@gmail.com"></Input>
          </div>

          <div className='my-2'>
            <Label>Password</Label>
            <Input type="password" placeholder="******" value={input.passworrd} name='password' onChange={changeEventHandler}></Input>
          </div>

          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='Student' checked={input.role === 'Student'} onChange={changeEventHandler} className='cursor-pointer'></Input>
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value='Recruiter' checked={input.role === 'Recruiter'} onChange={changeEventHandler} className='cursor-pointer' ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {
            loading ?
              (
                <div className="flex item-center justify-center my-10">
                  <div className="spinner-border text-blue-600" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <button type='submit' className='block w-full py-2 text-white bg-primary hover:bg-primary/90 rounded-md my-3'>
                  Login
                </button>
              )

          }


          <p className="text-gray-500 text-md my-2">
            Don't any have account ? <Link to='/register' className='text-blue-700'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
