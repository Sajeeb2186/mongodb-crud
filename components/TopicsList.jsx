

import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi';


// fething data from database

 const getTopic=async()=>{

   try {
   const res= await fetch("http://localhost:3001/api/topics",{
      cache:"no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch");

    }
    return res.json();
    
   } catch (error) {

    console.log("error loading topics",error)
    
   }

 }




export default async function TopicsList() {

  const topics= await getTopic();

  return (
   <>

      {topics.map(t=>(

      <div className='p-4 border border-slate-300 my-3 flex justify-between items-start'>
          <div>
            <h2 className='font-bold text-2xl'>{t.title} </h2>
            <div>{t.description}</div>
          </div>
          <div className='flex  gap-2'>
            <RemoveBtn></RemoveBtn>
            <Link href={`/editTopic/${t._id}`}>

            <HiPencilAlt size={24}></HiPencilAlt>
            
            </Link>
          </div>
      </div>
      ))}
   
   </>
  )
}
