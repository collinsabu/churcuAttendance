"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AttendancePage() {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    maleCount: "",
    femaleCount: "",
    childrenCount: "",
    firstTimerCount: "",
    offeringAmount: "",
    otherSeedAmount: "",
  });

  const router = useRouter();

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to the API route for creating attendance records
      const response = await fetch("http://localhost:3000/api/church", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // If the request is successful, log the response
      if (response.status === 201) {
        console.log("Attendance record created successfully");
        router.push("/")
        router.refresh()
      
      } else {
        // If the request fails, throw an error
        throw new Error("Failed to create attendance record");
      }
    } catch (error) {
      console.error("Error creating attendance record:", error.message);
    }
  };

  return (
    <main className="bg-bg-green h-screen flex justify-center items-center">
      <div className="sm:w-[30%] w-[85%] h-[82%] bg-white sm:px-20 px-5 pt-6">
        <form onSubmit={handleSubmit} className=" flex flex-col  items-center">
          <input
            className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-3 sm:my-5 w-full"
            type="number"
            name="maleCount"
            placeholder="Enter male count"
            value={formData.maleCount}
            onChange={handleChange}
          />

          <input
            className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-3 sm:my-5 w-full"
            type="number"
            name="femaleCount"
            placeholder="Enter female count"
            value={formData.femaleCount}
            onChange={handleChange}
          />

          <input
            className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-3 sm:my-5 w-full"
            type="number"
            name="childrenCount"
            placeholder="Enter children count"
            value={formData.childrenCount}
            onChange={handleChange}
          />

          <input
            className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-3 sm:my-5 w-full"
            type="number"
            name="firstTimerCount"
            placeholder="Enter first-timer count"
            value={formData.firstTimerCount}
            onChange={handleChange}
          />

          <input
            className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-3 sm:my-5 w-full"
            type="number"
            name="offeringAmount"
            placeholder="Enter offering amount"
            value={formData.offeringAmount}
            onChange={handleChange}
          />

          <input
            className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-3 sm:my-5 w-full"
            type="number"
            name="otherSeedAmount"
            placeholder="Enter other seed amount"
            value={formData.otherSeedAmount}
            onChange={handleChange}
          />

          <button
            className="sm:w-full w-[80%] bg-bg-green h-14 mt-7 rounded-full font-bold sm:text-xl text-white "
            type="submit"
          >
            Submit Attendance
          </button>
        </form>
      </div>
    </main>
  );
}
