"use client";

import { useRouter } from "next/navigation";
import React from 'react';

interface CardProps{
    title:string;
    content:string;
    picture_src:string;
    routerpath:string;
}



const card:React.FC<CardProps> = ({
    title, content, picture_src, routerpath
}) => {
    const router = useRouter();

    const pushToRouter = () => {
        router.push(routerpath);
    }

    return ( <div className="w-1/4 bg-neutral-400 p-4 rounded-md shadow-purple-600 shadow-md shadow-x-1 flex flex-col items-center justify-between">
        <h1 className="text-4xl font-bold text-neutral-800">{title}</h1>
        <img src={picture_src} className="pt-4"/>
        <p className="pt-4 text-xl text-neutral-800">{content}</p>
        <button className="bg-neutral-800 shadow-purple-600 shadow-md shadow-x-1 rounded-md p-2 
            text-white mt-4 font-bold" onClick={pushToRouter}>Go Here</button>
    </div> );
}
 
export default card;