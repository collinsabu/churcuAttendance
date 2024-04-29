import connectMongoDB from "@/libs/mongodb";
import Attendance from "@/models/attendance";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      maleCount,
      femaleCount,
      childrenCount,
      firstTimerCount,
      offeringAmount,
      otherSeedAmount,
      createdAt,
    } = await request.json();
    await connectMongoDB();
    await Attendance.create({
      maleCount,
      femaleCount,
      childrenCount,
      firstTimerCount,
      offeringAmount,
      otherSeedAmount,
      createdAt,
    });
    return NextResponse.json({ message: "Attendance Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating attendance:", error.message);
    return NextResponse.error(error);
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const attendance = await Attendance.find();
    return NextResponse.json({ attendance });
  } catch (error) {
    console.error("Error fetching attendance:", error.message);
    return NextResponse.error(error);
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Attendance.findByIdAndDelete(id);
    return NextResponse.json({ message: "Attendance deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting attendance:", error.message);
    return NextResponse.error(error);
  }
}
