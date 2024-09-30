/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";

export default function ShareListing() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation (you can add more checks)
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        const formData = {
            name,
            email,
            message,
        };

        console.log("Form Data:", formData);


        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="mt-7 bg-white border rounded-md shadow">
            <h1 className="text-xl font-medium text-center my-2">
                Share This Listing
            </h1>
            <div className="w-full h-[1.5px] bg-gray-100"></div>

            <div className="py-5 px-3">
                <div className="flex border rounded-md shadow items-center gap-3">
                    <Image
                        src={"/img.png"}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-[100px] h-[80px] rounded-md"
                    />
                    <div>
                        <h3 className="text-xl font-medium mb-3">Blog Title</h3>
                        <p className="text-sm text-gray-600">20 May 2022</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-gray-600">Your Name</label>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Enter your full name.." 
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Update state on input change
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-gray-600">Your Email</label>
                        <input 
                            type="email" 
                            className="input" 
                            placeholder="Enter your email.." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-gray-600">Message</label>
                        <textarea
                            cols={9}
                            rows={5}
                            className="input"
                            placeholder="Enter your message.."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} // Update state on input change
                        />
                    </div>
                    <div className="text-center mt-2">
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-md text-white font-medium bg-primary"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
