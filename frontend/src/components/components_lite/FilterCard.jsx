import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Item } from '@radix-ui/react-radio-group'


const filterData = [
  {
    filterType: "Location",
    array: [
      "Mumbai",
      "Delhi",
      "Bengaluru",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Nashik",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Surat",
      "Lucknow",
      "Noida",
      "Gurgaon",
      "Chandigarh",
      "Bhopal",
      "Indore",
      "Nagpur",
      "Visakhapatnam",
      "Coimbatore",
      "Thiruvananthapuram",
      "Vadodara",
      "Patna",
      "Ranchi",
      "Raipur",
      "Guwahati",
      "Kanpur",
      "Ludhiana",
      "Mysuru",
      "Amritsar",
      "Varanasi",
      "Remote"
    ]
  },
  {
    filterType: "Industry",
    array: [
      "IT",
      "Finance",
      "Marketing",
      "Healthcare",
      "Education",
      "Manufacturing",
    ]
  },
  {
    filterType: "Experience",
    array: [
      "0 years",
      "0-3 years",
      "3-5 years",
      "5-7 years",
      "7+ years"
    ]
  },
  {
    filterType: "Salary",
    array: [
      "0-50k",
      "50k-100k",
      "100k-200k",
      "200k+"
    ]
  }
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div>
              <h2 className='font-bold text-lg'>{data.filterType}</h2>
              {
                data.array.map((item, index) => (

                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value={item}></RadioGroupItem>
                    <label>{item}</label>

                  </div>

                ))
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
