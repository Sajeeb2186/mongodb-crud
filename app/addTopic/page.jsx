

export default function page() {
  return (
       <form className="flex flex-col gap-3">

        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Add a Topic"/>
        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Add  Description"/>

        <button className="bg-green-600 text-white py-3 px-6  "> Add Topic</button>


       </form>
  )
}
