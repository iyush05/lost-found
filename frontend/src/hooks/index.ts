import axios from "axios";
import { BACKEND_URL } from "config";
import { useEffect, useState } from "react";



export const useItems = ({ id }: { id: string}) => {
    const [itemFound, setItemFound] = useState("");
    const [itemDescription, setItemDescription] = useState(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/items/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setItemFound("Item found");
                setItemDescription(response.data);
            })
    }, [id])

    return {
        itemFound, 
        itemDescription
    }

}