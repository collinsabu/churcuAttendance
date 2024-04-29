import mongoose, { Schema }  from "mongoose";

const attendanceSchema = new Schema({
  maleCount: {
    type: Number,
    required: true,
  },
  femaleCount: {
    type: Number,
    required: true,
  },
  childrenCount: {
    type: Number,
    required: true,
  },
  firstTimerCount: {
    type: Number,
    required: true,
  },
  offeringAmount: {
    type: Number,
    required: true,
  },
  otherSeedAmount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);

export default Attendance;



