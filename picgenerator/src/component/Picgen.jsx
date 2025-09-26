import React, { useEffect, useState } from 'react'

const Picgen = () => {
    const [img,setImg] =useState([])
    
    const generateimg = (num) =>{
       const newImage = [];
        for(let i = 0 ; i < num ; i++){
               newImage.push(
        `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
      );
        }
        setImg([...img,...newImage])
        
    }
    useEffect(() =>{
        generateimg(8);
    },[])
    
  return (
    <div>
      
        <div className=' grid grid-cols-4 p-[20px] gap-[20px] '>{img.map((elem,ind) => {
            return <img src={elem} key={ind} className='rounded-[10px] w-[400px] h-[220px]'  />
        })}</div>
        <div className=' flex justify-center'><button className='py-[6px] px-[15px] rounded-[8px] bg-blue-500 mb-1.5 ' onClick={() => generateimg(8)}>More</button></div>
    </div>
  )
}

export default Picgen