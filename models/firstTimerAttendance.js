import mongoose, { Schema }  from "mongoose";


const firstTimerattendanceSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  bornAgain: {
    type: String,
    required: true,
  },
  baptized: {
    type: String,
    required: true,
  },
  joinWorkForce: {
    type: String,
    required: true,
  },
  enjoyedService: {
    type: String,
    required: true,
  },
  whatsappGroup: {
    type: String,
    required: true,
  },
  prayerRequests: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FirstTimerattendance = mongoose.models.FirstTimerattendance || mongoose.model('FirstTimerattendance', firstTimerattendanceSchema);

export default FirstTimerattendance;