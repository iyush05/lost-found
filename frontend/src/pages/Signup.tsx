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
                if(!(postInputs.email).endsWith('@akgec.ac.in')) {
                    return (
                        alert("Email must be of AKGEC domain.")
                    )
                }
                const response = await axios.post(`${BACKEND_URL}/api/user/signup`,postInputs)
                const jwt = response.data;
                localStorage.setItem("token", jwt);
                axios.get('http://localhost:3000/home', {
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
            <div className="grid grid-cols-2 h-screen">
                <div className="flex items-center justify-center">
                    <div className="">
                        <div className="text-5xl">Create an Account</div>
                        <div className="flex text-sm text-gray-500">
                        <div className="pr-3 text-orange-400">Already have an account?</div>
                        <Link className="underline text-blue-950" to="/signin">Sign in</Link>
                        </div>
                        <div className="text-lg font-bold pl-1 pt-12 pb-1">Name</div>
                        <Input type="text" placeholder="Enter your name" className="bg-gray-100 text-orange-500 h-10" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }}/>
                        <div className="text-lg font-bold pl-1 pt-3 pb-1">Email</div>
                        <Input type="email" placeholder="eg; ayush23100@akgec.ac.in" className="bg-gray-100 text-orange-500 h-10" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value,
                            })
                        }}/>
                        <div className="text-lg font-bold pl-1 pt-3 pb-1">Password</div>
                        <Input type="password" placeholder="Password" className="bg-gray-100 text-orange-500 h-10" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value,
                            })
                        }}/>
                        <Button className="bg-orange-500 text-white hover:bg-orange-700 mt-6 w-full h-10" onClick={handleButtonClick}>Signup</Button>
                    </div>
                </div>
                <div className="hidden md:block ">
                    <Quote/>
                </div>
            </div>
        </>
    )
}