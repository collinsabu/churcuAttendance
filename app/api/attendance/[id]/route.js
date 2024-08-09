import connectMongoDB from "@/libs/mongodb";
import FirstTimerAttendance from "@/models/firstTimerAttendance";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const attendance = await FirstTimerAttendance.findById(id);
    if (!attendance) {
      return NextResponse.json({ message: 'Attendance not found' }, { status: 404 });
    }
    return NextResponse.json(attendance, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendance:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
