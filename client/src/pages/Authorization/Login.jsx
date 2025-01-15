import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit= async  (e)=>{
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data); // Handle successful login
      } else {
        console.error("Login failed:", data); // Handle errors from the server
      }
    } catch (error) {
      console.error("Error:", error); // Handle network or other unexpected errors
    }

   
  }

  console.log(email);
  

  return (
    <div className="login border-gray-600  xl:w-auto flex flex-col border p-10 xl:h-[65vh] lg:h-[40vh] md:h-[50vh]">
      <i
        data-visualcompletion="css-img"
        aria-label="Instagram"
        className="inline-block ml-10"
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
        className="border-2 border-gray-800 text-white rounded-sm mt-10 mb-6 hover:border-gray-500 bg-[#ffffff24] h-6 p-4"
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border-2  hover:border-gray-500 border-gray-800 text-white rounded-sm  mb-10 bg-[#ffffff24] h-6 p-4"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSubmit} className=" cursor-pointerw-full p-2 rounded-md bg-[#0095f6]">
        Log in
      </button>
    </div>
  );
};

export default Login;
