import React from 'react'
import Card from './Card'
import Subcription from '@/app/components/Subcription/Subcription'

const listOfDoctor = [
  {
    url : "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=1024x1024&w=is&k=20&c=HwRi4NnrK9aKEC27BkXnJJfuggGABNmqnnmXL7D9aBs=",
    name : "Dr Monica",
    speciality: "Eye"
  },
  {
    
      url : "https://media.istockphoto.com/id/1434687410/photo/portrait-of-happy-and-successful-african-american-doctor-man-working-inside-office-clinic.webp?s=1024x1024&w=is&k=20&c=9AyJQ_Y0Dkzuxm4GrX6Mg44EM1CquxV_e11uhXrMCMo=",
      name : "Dr Macron",
      speciality: "Medicine"
  },
  {
    
    url : "https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=1024x1024&w=is&k=20&c=9dGjXLWwRAimcACr0jOZDmmLcH0P29fi2ibKunQ6xpo=",
    name : "Dr Hansi",
    speciality: "Gynecologist"
},
{
    
  url : "https://media.istockphoto.com/id/1203995945/photo/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-hospital-corridor.jpg?s=1024x1024&w=is&k=20&c=NOc7txI7fdY-XAQma6Jvey3jG6AVuKV8VFQGJKTq7R4=",
  name : "Dr Ganjudi",
  speciality: "Dentist"
},
{
    
  url : "https://media.istockphoto.com/id/1346711310/photo/portrait-of-smiling-female-doctor-wearing-uniform-standing.jpg?s=1024x1024&w=is&k=20&c=Kir6D3kfw4XzIbarncN3AAJNwYOS8LYS2mlNGHv3tbA=",
  name : "Dr DatVoil",
  speciality: "Heart"
},
{
    
  url : "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.webp?s=1024x1024&w=is&k=20&c=YEbzhy_uH_NtBJodMt42qM8aoypw2ufHEW9Zbn_Py4c=",
  name : "Dr NeroSing",
  speciality: "Neoro"
},
]

const page =async ({params}) => {
  let id = params.id
  
  

  let x = listOfDoctor.filter((item)=>{
   return item.speciality == id
  })

  const data  = x.length == 0 ? listOfDoctor :  x
 
    await new Promise(resolve => setTimeout(resolve,2000))
  
  
 
  return (
    <div className="sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-y-7 lg:gap-8  ">

        {
          data.map((item)=>{
            return (
              <Card item={item}></Card>
            )
          })
        }
       </div>
     
     <Subcription></Subcription>
      
      </div>
  )
}

export default page