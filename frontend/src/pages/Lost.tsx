import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useState } from "react";
import { ItemCard } from "@/components/ItemCard";



export const Lost = () => {
    const [prompt, setPrompt] = useState({
        query: "",
    });
    const [result, setResult] = useState<{id: string; name: string; description: string} | null>(null);

    const handleButtonClick = async () => {
        try {
            console.log("Sending POST request with body:", prompt);
    
            const response = await axios.post(
                `${BACKEND_URL}/api/llama/query`, 
                prompt, 
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            console.log("POST Response:", response.data);
    
            const itemId = response.data.id || response.data; // Adjust based on response structure
            if (!itemId) {
                console.error("Invalid ID received from POST response:", response.data);
                return;
            }
    
            const res = await axios.get(
                `${BACKEND_URL}/api/user/items/${itemId}`, 
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            console.log("GET Response:", res.data);
    
            setResult(res.data);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };
    

    

    
    return (
        <div className="bg-lostPage bg-cover bg-fized bg-center h-screen w-screen">
            <div className="grid grid-cols-2">
                <div></div>
                <div>
                    <div className="font-shadows text-4xl justify-items-center mt-24">
                        Describe the item you lost example: where did you lose it, how does it look, name of the item
                    </div>
                    <Textarea className="mt-24 border-black border-2 placeholder:text-gray-500 w-96 h-24 ml-24" placeholder="Describe the item you lost"
                     onChange={(e) => {
                            setPrompt({
                                ...prompt,
                                query: e.target.value
                            })
                     }}/>
                    <Button className="bg-gray-600 text-white ml-64 mt-6 hover:bg-gray-800 w-24" onClick={handleButtonClick}> Search </Button>
                    <div>
                        {result && <ItemCard title={result.name} description={result.description} />}
                    </div>
                </div>
            </div>
        </div>
    )
}