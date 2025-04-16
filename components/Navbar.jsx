import Link from "next/link";
import LoginButton from "./LoginButton";


export default function Navbar() {
  return (
    

        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">

            <Link className="text-white font-bold" href={'/'}>NextCrud</Link>
            <LoginButton className="bg-white text-red-700">signIn</LoginButton>
            <Link className="bg-white p-2 rounded" href={'/addTopic'}>Add Topic</Link>

            



        </nav>


    
  )
}
