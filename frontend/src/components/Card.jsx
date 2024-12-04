import React from 'react'
import img  from './images/img1.jpeg';

function Card({itemname,Description,imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWedvmMLZ6alu5uXudgOHJjN4mcn-Ee68-Q&s"}) {
    return (
        <>
        <div className='bg-white text-black flex-col place-content-center justify-center h-100vh md:w-80 rounded-lg overflow-auto'>
        <div  className='h-96'>
            <img  className='md:w-80 h-96 '
src={imglink || img} alt="img"  />
        </div>
        <div className='text-left'>
            <p className='text-xl text-blue-500 inline-flex ml-2 font-mono'> Item : <p className='ml-2 text-black text-sm mt-2'>{itemname}</p></p>
            <br />
            <p className='text-blue-500 text-xl inline-flex ml-2 font-mono mt-4'>Description: <p className=' ml-2 text-sm text-black mt-1 '>{Description}</p></p><br />
            <p className='ml-2 mt-2 text-blue-500 inline-flex text-xl font-mono'>created at: <p className='text-black ml-2 text-sm mt-1'> 01/01/2024 12:00 AM</p> </p>
        </div>
        </div>
        </>
    )
}

export default Card
