"use client";
// app/firsttimerlist/[id]/page.js
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

async function getFirstTimerAttendance(id) {
  try {
    const res = await fetch(`/api/attendance/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch attendance details");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return null;
  }
}

export default function FirstTimerDetails({ params }) {
  const { id } = params;
  const [attendance, setAttendance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchAttendance() {
      const fetchedAttendance = await getFirstTimerAttendance(id);
      if (fetchedAttendance) {
        setAttendance(fetchedAttendance);
      } else {
        setError("Attendance not found");
      }
      setLoading(false);
    }

    fetchAttendance();
  }, [id]);

  if (loading) {
    return (
      <div className=" bg-bg-green text-white text-xl sm:text-4xl flex justify-center items-center bg-base_color text-base_text h-screen">
        loading details...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!attendance) {
    return notFound();
  }

  return (
    <main className="bg-bg-green my-10">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto py-8 sm:text-bg-green text-white sm:bg-green-300  bg-bg-green px-4 sm:px-8 overflow-hidden">
        <div className="flex flex-wrap justify-between">
          {[
            { label: "Full Name", value: attendance.fullName },
            { label: "Address", value: attendance.address },
            { label: "Phone No", value: attendance.phoneNo },
            { label: "Email", value: attendance.email },
            { label: "Gender", value: attendance.gender },
            { label: "Marital Status", value: attendance.maritalStatus },
            { label: "Born Again", value: attendance.bornAgain },
            { label: "Baptized", value: attendance.baptized },
            { label: "Join WorkForce", value: attendance.joinWorkForce },
            { label: "Enjoyed Service", value: attendance.enjoyedService },
            { label: "WhatsApp Group", value: attendance.whatsappGroup },
          ].map((field) => (
            <div key={field.label} className="w-full sm:w-1/2 my-3">
              <h5 className="sm:text-xl">{field.label}:</h5>
              <p className="sm:text-xl break-words">{field.value}</p>
            </div>
          ))}
        </div>

        <div className="my-6">
          <h5 className="sm:text-xl">Prayer Requests:</h5>
          <p className="sm:text-xl break-words">{attendance.prayerRequests}</p>
        </div>

        <button
          onClick={() => router.push("/firsttimerlist")}
          className="mt-6 px-4 py-2  bg-green-300  sm:bg-bg-green text-bg-green sm:text-white rounded hover:bg-base_two sm:hover:text-green-300"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
