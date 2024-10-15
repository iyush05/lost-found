import axios from "axios";
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] =  useState({
        name: "",
        email: "",
        hashedPassword: "",
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/user/${type == "signup" ? "signup" : "signin"}`,postInputs)
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/home");
        } catch(e) {
            alert("Error while signing up")
            //alert the user here that the request failed
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
                <div className="text-3xl font-extrabold">
                    { type == "signup" ? "Create an account" : "Log into your account"}
                </div>
                <div className="text-slate-400">
                    {type === "signin" ? "Don't have an account" : "Already have an account? "}
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign up" : "Signin"}</Link>
                </div>
            </div>
            <div className="pt-4">
            {type === "signup" ? <LabelledInput label="Name" placeholder="Ayush..." onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
            }} /> : null} 

            <LabelledInput label="Email" placeholder="ayush@akgec.ac.in" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    email: e.target.value
                })
            }} />

            <LabelledInput label="Password" type={"password"} placeholder="password" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    hashedPassword: e.target.value
                })
            }} />
            <button onClick={ sendRequest} type="button" className="mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
             focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
             dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type === "signup" ? "Sign up" : "Sign in"}</button>

            </div>
            </div>
        </div>
        
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType) {
    return <div>
    <label className="block mb-2 text-sm text-black font-bold pt-4">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}