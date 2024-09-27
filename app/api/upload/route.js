import { NextResponse } from "next/server";
import {put} from "@vercel/blob"
export async function  POST(request){
    const data = await request.formData();
    const file = data.get('file');
  if(!file){
 return NextResponse.json({error: 'No file provided'}, {status: 400});   
  };
 const blob = await put(file.name,file,{
    access:"public"
 })
  return NextResponse.json(blob, {status:201}); 
  

}