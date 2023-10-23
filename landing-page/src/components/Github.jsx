import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vaibhavgupta03')
    //         .then(response => response.json())
    //         .then(data => {
    //         setData(data)
    //     })
    // }, [])
    
    return (
        <div className='flex gap-x-5 bg-gray-600  justify-center items-center rounded-lg'>
            <img className='w-40 h-40 rounded-full border-2 shadow-lg border-dashed' src={data.avatar_url} alt="Git Picture" width={300}/>
            <div className='m-4 text-white p-4 text-xl'>
          Github name : {data.name}<br />
          Github followers : {data.followers}<br/>
          Github id : {data.id}<br />
          Github username : {data.login}<br/>
          Location : {data.location}<br />
          Github public repos : {data.public_repos}<br /></div>
          
        
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vaibhavgupta03');
    return response.json();
}
