import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useState } from "react";
import Loader from "@/components/loader";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";


export const Found = () => {
    const [postDescription, setPostDescription] = useState({
        name: "",
        description: "",
    });
    const [itemAdded, setItemAdded] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleButtonClick() {
        setLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/item`, postDescription);
            console.log(response);
        } catch(e) {
            console.log("error while posting item");
        }
        setItemAdded(true);
        setLoading(false);
    }
    return (
        <div className="bg-foundPage h-screen w-screen ">
            <div className="grid grid-cols-2">
                <div></div>
                <div className="mt-28">
                <div className="font-shadows text-5xl">Describe the item you found example: where did you find it, how does it look, name of the item</div>
                <div className="justify-items-center mr-28">
                <div className="mt-24">
                        {/* <input type="text" className="rounded-md  opacity-45 border-yellow-700 border-2" placeholder="Name" onChange={(e) => {
                            setPostDescription(prevState => ({
                                ...prevState,
                                name: e.target.value
                            }));
                        }}/> */}
                        <Input type="text" placeholder="Item Name" className="rounded-md  bg-opacity-45 border-yellow-700 border-2 w-96 placeholder:text-black" onChange={(e) => {
                            setPostDescription(prevState => ({
                                ...prevState,
                                name: e.target.value
                            }))}}
                        />
                </div>
                <div className="mt-6">
                        {/* <input type="text" className="rounded-md  bg- opacity-45 border-yellow-600 border-4 w-80 h-24" placeholder="Description" onChange={(e) => {
                            setPostDescription(prevState => ({
                                ...prevState,
                                description: e.target.value
                            }));
                        }}/> */}
                        <Textarea placeholder="Description" className="rounded-md  bg-opacity-45 border-yellow-700 border-2 w-96 h-24 placeholder:text-black" onChange={(e) => {
                            setPostDescription(prevState => ({
                                ...prevState,
                                description: e.target.value
                            }));
                        }}/>
                    </div>
                    <button className="rounded-md bg-yellow-300 hover:bg-yellow-600 transition-colors w-24 ml-12 h-10 mt-6" onClick={handleButtonClick}>{(loading) ? <Loader/> : "Submit"}</button>

                    <div className="ml-12 mt-6">{(itemAdded) ? <div>✔ Item added successfully</div> : "" }</div>
                </div>
                </div>
            </div>
        </div>
    )   
}