import { Quote } from "@/components/Quote"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from "../../config"
import axios from "axios";

export const Signup = () => {
    const navigate = useNavigate();

        const [postInputs, setPostInputs] = useState({
            name: "",
            email: "",
            password: "",
        })

        const handleButtonClick = async () => {
            try{
                const response = await axios.post(`${BACKEND_URL}/api/user/signup`,postInputs)
                const jwt = response.data;
                localStorage.setItem("token", jwt);
                axios.get('http://localhost:3000/protected', {
                    headers: {
                      Authorization: `Bearer ${jwt}`, // Send the token in Authorization header
                    }
                  })
                navigate("/home");
            } catch(e) {
                alert("Error while signing up");
            }
        }
    
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="p-12">
                    <div className="p-16 pl-20">
                        <div className="text-3xl">Create an Account</div>
                        <div className="flex text-xs text-gray-500">
                        <div className="pr-3">Already have an account?</div>
                        <Link className="underline" to="/signin">Signin</Link>
                        </div>
                        <div className="text-sm font-bold pl-1 pt-12 pb-1">Name</div>
                        <Input type="text" placeholder="Enter your name" className="bg-gray-100 w-80" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }}/>
                        <div className="text-sm font-bold pl-1 pt-3 pb-1">Email</div>
                        <Input type="email" placeholder="eg ayush23100@akgec.ac.in" className="bg-gray-100 w-80" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value,
                            })
                        }}/>
                        <div className="text-sm font-bold pl-1 pt-3 pb-1">Password</div>
                        <Input type="password" placeholder="Password" className="bg-gray-100 w-80" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value,
                            })
                        }}/>
                        <Button className="bg-black text-white hover:bg-gray-600 mt-6 w-80 h-8" onClick={handleButtonClick}>Signup</Button>
                    </div>
                </div>
                <div>
                    <Quote/>
                </div>
            </div>
        </>
    )
}