import connectMongoDB from "@/libs/mongodb";
import Attendance from "@/models/attendance";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newMaleCount: maleCount, newFemaleCount: femaleCount, newChildrenCount: childrenCount, newFirstTimerCount: firstTimerCount, newOfferingAmount: offeringAmount, newOtherSeedAmount: otherSeedAmount, } = await request.json();
  await connectMongoDB();
  await Attendance.findByIdAndUpdate(id, { maleCount, femaleCount, childrenCount, firstTimerCount, offeringAmount, otherSeedAmount});
  return NextResponse.json({ message: "Attendance updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const attendance = await Attendance.findOne({ _id: id });
  return NextResponse.json({ attendance }, { status: 200 });
}