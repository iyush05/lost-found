import { useState } from "react";
import { Button } from "./ui/button";


interface ItemCardProps {
    // id: number;
    title: string;
    description: string;
}

export const ItemCard = ({
    // id,
    title,
    description
}: ItemCardProps) => {

    const [collect, setCollect] = useState(false);

    return( 
        <div className="bg-transparent border-2 border-black w-auto h-auto m-4 mt-6 rounded-lg flex align items-center ">
            <div className='grid grid-cols-8 m-4'>
            <div className='col-span-3 border-r-2 border-gray-500'>
                <img src="found-bg.jpg" height={120} width={120} alt="lost item" className="rounded-full" />
            </div>
            <div className='col-span-5 ml-4 font-mono'>
                <div className=""><u className="font-bold">Item name</u> : {title}</div>
                <div className="mt-1"><u className="font-bold">Description</u> : {description}</div>
            </div>
            </div>
            {(collect) ? "Item request received you can collect the item from CSIT block CL-3" : <Button className="bg-yellow-400 hover:bg-yellow-600 mr-2 border-yellow-500 border-2 hidden:" onClick={() => setCollect(true)}>Schedule a meet</Button>}
        </div>
    )
}