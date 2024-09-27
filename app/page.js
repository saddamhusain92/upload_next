"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const[file,setFile] = useState(null);
  const handleInput = (e)=>{
    setFile(e.target.files[0]);
    
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/api/upload', formData).then((e) => {
      console.log(e);
      
    })
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
     
        <div className="flex flex-col gap-3"> 
        <form onSubmit={handleSubmit}>
        <Input type = "file" onChange={(e)=>handleInput(e)}></Input>
        <Button variant="outline" type="submit" >Upload</Button>
        </form>
       
        </div>
        
    

     
      </main>
    </div>
  );
}
