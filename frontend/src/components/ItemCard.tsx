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
            
            <Button className="bg-yellow-400 hover:bg-yellow-600 mr-2 border-yellow-500 border-2">Schedule a meet</Button>

        </div>
    )
}