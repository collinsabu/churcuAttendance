"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dayjs from "dayjs";

const AttendanceList = () => {
  const [attendances, setAttendances] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(dayjs().month()); // Current month (0 = January, 11 = December)
  const [filteredAttendances, setFilteredAttendances] = useState([]);

  useEffect(() => {
    fetchAttendances();
  }, []);

  useEffect(() => {
    // Filter attendances based on the current month
    const filtered = attendances.filter((att) =>
      dayjs(att.date).month() === currentMonth
    );
    setFilteredAttendances(filtered);
  }, [attendances, currentMonth]);

  const fetchAttendances = async () => {
    try {
      const response = await fetch("/api/attendance");
      const data = await response.json();
      setAttendances(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch("/api/attendance", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      setAttendances(attendances.filter((att) => att._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  return (
    <main className="p-4 bg-bg-green h-screen">
      <h1 className="text-2xl font-bold mb-4 sm:my-9 text-white text-center">
        First Timer List - {dayjs().month(currentMonth).format("MMMM")}
      </h1>
      <div className="container mx-auto bg-green-300">
        <ul className="space-y-4">
          {filteredAttendances.length > 0 ? (
            filteredAttendances.map((att) => (
              <li key={att._id} className="p-4 rounded shadow-md">
                <div className="flex justify-between">
                  <Link href={`/firsttimerlist/${att._id}`}>
                    <div>
                      <h2 className="text-xl font-bold">{att.fullName}</h2>
                      <p>{att.address}</p>
                      <p>{att.phoneNo}</p>
                    </div>
                  </Link>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={() => handleDelete(att._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-white">No records found for this month.</p>
          )}
        </ul>
      </div>
      <div className="flex justify-between mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handlePreviousMonth}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default AttendanceList;
