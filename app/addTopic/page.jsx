"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title and description are required");
      return;
    }

    console.log(title,description);

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body:JSON.stringify({ title, description }),



      });

      console.log(res);

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to  create a new topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form  onSubmit={handleSubmit}  className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Add a Topic"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Add  Description"
      />

      <button type="submit" className="bg-green-600 text-white py-3 px-6  ">
        
        Add Topic
      </button>
    </form>
  );
}
