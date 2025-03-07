import EditTopic from "@/components/EditTopic";


const getTopicById=async(id)=>{
  
  
  
  try {

    const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache: 'no-store'
    })
  if(!res.ok){
    throw new Error("Failed to fetch topics")
  }

  const response=res.json()

  return response;
} catch (error) {
  
  console.log(error)

  
}



}

export default async function page({params}) {

  const {id }= params;
  const {topic}=await getTopicById(id)
  const {title,description}=topic;
  console.log("id:",id)
  return (
   <EditTopic id={id} title={title} description={description}></EditTopic>
  )
}
