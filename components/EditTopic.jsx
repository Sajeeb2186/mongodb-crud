
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditTopic({id,title,description}) {

  const[newTitle,setNewTitle]=useState(title)
  const [newDescription,serNewDescription]=useState(description);

  const router=useRouter();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {

      const res=await fetch(`http://localhost:3000/api/topics/${id}`,{

        method:"PUT",
        headers:{
          "content-type":'application/json',
        },
        body:JSON.stringify({newTitle,newDescription})

      })


      if(!res.ok){
        throw new Error('Failed to update topic')
      }

      router.refresh();
      router.push('/');

      
    } catch (error) {

      console.log(error)
      
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

    <input onChange={(e)=>setNewTitle(e.target.value)}  value={newTitle} className="border border-slate-500 px-8 py-2" type="text" placeholder="Add a Topic"/>
    <input  onChange={(e)=>serNewDescription(e.target.value)}  value={newDescription} className="border border-slate-500 px-8 py-2" type="text" placeholder="Add  Description"/>

    <button className="bg-green-600 text-white py-3 px-6  "> Update Topic</button>


   </form>
  )
}
