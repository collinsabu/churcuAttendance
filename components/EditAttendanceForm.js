"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, maleCount, femaleCount, childrenCount, firstTimerCount, offeringAmount, otherSeedAmount}) {
  // State variables to hold form data

   const  [newMaleCount, setNewMaleCount] = useState(maleCount)
  const  [newFemaleCount, setNewFemaleCount] = useState(femaleCount)
   const  [newChildrenCount, setNewChildrenCount] = useState(childrenCount)
   const  [newFirstTimerCount, setNewFirstTimerCount] = useState(firstTimerCount)
   const  [newOfferingAmount, setNewOfferingAmount] = useState(offeringAmount)
   const [newOtherSeedAmount, setNewOtherSeedAmount] = useState(otherSeedAmount)

  const router = useRouter();

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/church/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newMaleCount, newFemaleCount, newChildrenCount, newFirstTimerCount, newOfferingAmount, newOtherSeedAmount
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <main className="bg-bg-green h-screen flex justify-center items-center">
   <div className="w-[30%] h-[90%] bg-white px-20 pt-6">
     <form onSubmit={handleSubmit}>
       <input
         className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-5 w-full"
         type="number"
         name="newMaleCount"
         placeholder="Update male  count"
         value={newMaleCount}
         onChange={(e) => setNewMaleCount(e.target.value)}
       />

       <input
         className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-5 w-full"
         type="number"
         name="newFemaleCount"
         placeholder="Update female count"
         value={newFemaleCount}
         onChange={(e) => setNewFemaleCount(e.target.value)}
       />

       <input
         className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-5 w-full"
         type="number"
         name="newChildrenCount"
         placeholder="Update children count"
         value={newChildrenCount}
         onChange={(e) => setNewChildrenCount(e.target.value)}
       />

       <input
         className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-5 w-full"
         type="number"
         name="newFirstTimerCount"
         placeholder="Update first-timer count"
         value={newFirstTimerCount}
         onChange={(e) => setNewFirstTimerCount(e.target.value)}
       />

       <input
         className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-5 w-full"
         type="number"
         name="newOfferingAmount"
         placeholder="Update offering amount"
         value={newOfferingAmount}
         onChange={(e) => setNewOfferingAmount(e.target.value)}
       />

       <input
         className="border-b border-bg-green focus:border-b-1 bg-white focus:border-white outline-none my-5 w-full"
         type="number"
         name="newOtherSeedAmount"
         placeholder="Update other seed amount"
         value={newOtherSeedAmount}
         onChange={(e) => setNewOtherSeedAmount(e.target.value)}
       />

       <button
         className="w-full bg-bg-green h-14 mt-14 rounded-full font-bold text-xl text-white"
         type="submit"
       >
         Update Attendance
       </button>
     </form>
   </div>
 </main>
  );
}