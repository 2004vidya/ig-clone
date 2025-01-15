import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit= async  (e)=>{
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password,username }), // Send email and password
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Registration successful:", data); // Handle successful login
      } else {
        console.error("Registration failed:", data); // Handle errors from the server
      }
    } catch (error) {
      console.error("Error:", error); // Handle network or other unexpected errors
    }

   
  }
  return (
    <div
      className="signup login border-gray-600 bg-black flex flex-col border p-10 
  w-[90%] max-w-[500px] h-auto xl:h-[65vh] lg:h-[50vh] md:h-[60vh] sm:h-[70vh] 
  rounded-lg shadow-lg mx-auto mt-10 justify-center items-center space-y-6"
    >
      <i
        data-visualcompletion="css-img"
        aria-label="Instagram"
        className="inline-block"
        role="img"
        style={{
          backgroundImage:
            "url('https://static.cdninstagram.com/rsrc.php/v4/yl/r/2_tD1Q6wIri.png')",
          backgroundPosition: "0px 0px",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          width: "175px",
          height: "51px",
        }}
      ></i>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-2 border-gray-800 text-white rounded-sm w-full hover:border-gray-500 bg-[#ffffff24] h-8 p-3"
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
        className="border-2 border-gray-800 text-white rounded-sm w-full hover:border-gray-500 bg-[#ffffff24] h-8 p-3"
        type="text"
        placeholder="Username"
        value={username}
          
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border-2 hover:border-gray-500 border-gray-800 text-white rounded-sm w-full bg-[#ffffff24] h-8 p-3"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button className="w-full p-1 rounded-md bg-[#0095f6] text-white font-semibold">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
