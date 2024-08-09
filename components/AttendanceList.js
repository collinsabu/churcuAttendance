import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getAttendance = async () => {
  try {
    // Use an absolute URL to avoid server-side fetch issues
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://churcu-attendance.vercel.app';
    const res = await fetch(`${baseUrl}/api/church`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Attendance");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading attendance: ", error);
    return { attendance: [] }; // Return an empty array if there's an error
  }
};

export default async function AttendanceList() {
  const { attendance } = await getAttendance();

  if (!attendance || attendance.length === 0) {
    return (
      <div>
        <p>No attendance data available.</p>
      </div>
    );
  }

  return (
    <>
      {attendance.map((attend) => (
        <div
          key={attend._id}
          className="card bg-white p-8  rounded-[25px] text-[18px] font-semibold shadow-md"
        >
          <div className="flex">
            <p className="mr-4">Date: {formatDate(attend.createdAt)}</p>
            <p className="text-bg-green font-bold text-xl ">
              {getDayOfWeek(attend.createdAt)}
            </p>
          </div>

          <p className="mb-2">Male: {attend.maleCount}</p>
          <p className="mb-2">Female: {attend.femaleCount}</p>
          <p className="mb-2">Children: {attend.childrenCount}</p>
          <p className="mb-2">First-Timer: {attend.firstTimerCount}</p>
          <p className="mb-2">Offering: {attend.offeringAmount}</p>
          <p className="mb-2">Other Giving: {attend.otherSeedAmount}</p>

          <div className="flex gap-10 p-2 mt-5">
            <RemoveBtn id={attend._id} />
            <Link href={`/editAttendance/${attend._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

function formatDate(createdAt) {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDayOfWeek(createdAt) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(createdAt);
  const dayOfWeek = days[date.getDay()];
  return dayOfWeek;
}
