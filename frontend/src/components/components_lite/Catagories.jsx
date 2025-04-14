import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button'


const Category = [
  "Frontend Devloper",
  "Backend Devloper",
  "Fullstack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning",
  "Artificial Intelligence",
  "Cyber Security",
  "Product Manager",
  "UI/UX Designer",
  "Graphic Designer",
  "Graphic Engineer",
  "Video Editor"
]


const Catagories = () => {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-center text-blue-600'>
          Categories
        </h1>
        <p className='text-center text-gray-600'>
          Explore our extensive job market.
        </p>
      </div>
      <Carousel className="w-full max-w-xl gap-4 mx-auto my-10" >
        <CarouselContent>

          {
            Category.map((category, index) => {
              return <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                <Button>
                  {category}
                </Button>
              </CarouselItem>

            })
          }

        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  )
}

export default Catagories
