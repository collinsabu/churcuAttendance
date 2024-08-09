import connectMongoDB from "@/libs/mongodb";
import FirstTimerAttendance from "@/models/firstTimerAttendance";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      fullName,
      address,
      phoneNo,
      email,
      gender,
      maritalStatus,
      bornAgain,
      baptized,
      joinWorkForce,
      enjoyedService,
      whatsappGroup,
      prayerRequests,
    } = await request.json();

    await connectMongoDB();
    const newFirstTimerAttendance = await FirstTimerAttendance.create({
      fullName,
      address,
      phoneNo,
      email,
      gender,
      maritalStatus,
      bornAgain,
      baptized,
      joinWorkForce,
      enjoyedService,
      whatsappGroup,
      prayerRequests,
    });

    return NextResponse.json({ message: "First Timer Attendance Created", data: newFirstTimerAttendance }, { status: 201 });
  } catch (error) {
    console.error("Error creating first timer attendance:", error.message);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}


export async function GET() {
  try {
    await connectMongoDB();
    const firstimer = await FirstTimerAttendance.find({});
    return NextResponse.json(firstimer, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendances:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await FirstTimerAttendance.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
