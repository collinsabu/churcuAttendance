import EditAttendanceForm from "@/components/EditAttendanceForm";

const getAttendanceById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/church/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch attendance");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditAttendance({ params }) {
    const { id } = params;
    const { attendance } = await getAttendanceById(id);
    console.log(attendance)
    const { maleCount, femaleCount, childrenCount, firstTimerCount, offeringAmount, otherSeedAmount } = attendance;

    return <EditAttendanceForm id={id} maleCount={maleCount} femaleCount={femaleCount} childrenCount={childrenCount} firstTimerCount={firstTimerCount} offeringAmount={offeringAmount} otherSeedAmount={otherSeedAmount} />;
}