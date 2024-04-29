"use client"

import { useState } from "react"


export default function AuthForm({ handleSubmit }) {

   
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
            <form onSubmit={(e) => handleSubmit(e, email, password)}>
          <input
            className="border-b border-white focus:border-b-1 bg-bg-green focus:border-white outline-none my-10 sm:my-16 w-full"
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required 
            placeholder="Enter  your email"
          />

          <input
            className="border-b border-white focus:border-b-1 bg-bg-green focus:border-white outline-none w-full"
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required 
            placeholder="Enter your password"
          />
          <button className="w-full bg-white h-14 mt-8 sm:mt-14 rounded-full font-bold text-xl">Login</button>
        </form>
    </>
  )
}
