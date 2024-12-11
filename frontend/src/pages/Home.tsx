import { useNavigate } from "react-router-dom"

export const Home = () => { 
    const navigate = useNavigate();
    return (
        <>
        <div className="grid grid-cols-2">
            <div className="h-screen flex justify-center items-center font-cedarville text-8xl cursor-pointer" onClick={() => navigate('/lost')}>
                Lost
            </div>
            <div className="h-screen flex justify-center items-center font-cedarville bg-orange-500 text-8xl cursor-pointer" onClick={() => navigate('/found')}>
                Found
            </div>
        </div>
        <div className="bg-howitworks bg-cover bg-fized bg-no-repeat animate-slideUp bg-center h-screen w-screen">
            <div className="font-cedarville justify text-center pt-6 text-8xl">How it works</div>
            <div className="grid grid-cols-2">
                <div>
                    <div className="font-cedarville text-6xl ml-36 decoration-1">Lost</div>
                </div>
                <div className="text-end mr-36">
                <div className="font-cedarville text-6xl ml-36 decoration-1">Found</div>
                </div>
            </div>

        </div>
        </>
    )
}