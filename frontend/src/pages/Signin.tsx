import { Quote } from "@/components/Quote"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../../config"

export const Signin = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        email: "",
        password: "",
    })
    const handleButtonClick = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/signin`,postInputs)
            const jwt = response.data;
            localStorage.setItem("token", jwt);
                axios.get('http://localhost:3000/home', {
                    headers: {
                      Authorization: `Bearer ${jwt}`, // Send the token in Authorization header
                    }
                  })
                navigate("/home");
        } catch(e) {
            console.log("error while logging in");
            alert("Error while logging in");
        }
    }
    return (
        <>
        <div className="grid grid-cols-2 h-screen">
                <div className="flex items-center justify-center">
                    <div className=" mr-12 ">
                        <div className="text-5xl pb-1">Login to your Account</div>
                        <div className="flex text-sm text-gray-500">
                        <div className="pr-3 text-orange-400 pb-8">Don't have an account?</div>
                        <Link className="underline text-blue-950" to="/signup">Sign up</Link>
                        </div>
                        <div className="text-lg font-bold pl-1 pt-3 pb-1">Email</div>
                        <Input type="email" placeholder="eg; ayush23100@akgec.ac.in" className="bg-gray-100 w-96 h-10 text-orange-500" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value
                            })
                        }}/>
                        <div className="text-lg font-bold pl-1 pt-3 pb-1">Password</div>
                        <Input type="password" placeholder="Password" className="bg-gray-100 text-orange-500 w-96 h-10" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }}/>
                        <Button className="bg-orange-500 text-white hover:bg-orange-700 mt-6 w-96 h-10" onClick={handleButtonClick}>Signup</Button>
                    </div>
                </div>
                <div className="hidden md:block ">
                    <Quote/>
                </div>
            </div>
        </>
    )
}