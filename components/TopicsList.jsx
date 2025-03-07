
'use client'

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

// fething data from database




const getTopic = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const response = await res.json();

    
    
   

    // console.log(response); 

   

    return response;
  } catch (error) {
    console.log("error loading topics", error);
  }
};

export default  function TopicsList() {
  
  

  const [topics, setTopics] = useState();

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getTopic();
      setTopics(data);
    };
    fetchTopics();
  }, []);

 
   
  
  return (
    <>

      {topics?.topics?.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between items-start"
        >
          <div>
            <h2 className="font-bold text-2xl"> {t?.title} </h2>
            <div>{t?.description}</div>
          </div>
          <div className="flex  gap-2">
            <RemoveBtn id={t._id}></RemoveBtn>

            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24}></HiPencilAlt>
            </Link>
          </div>
        </div>
      ))}

      
    </>
  );
}
